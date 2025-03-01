<script>
	import * as config from '@setup';
	import Markdown from '@components/Markdown.svelte';
	import Graph from '@components/Graph.svelte';
	import Svg from '@components/Svg.svelte';
	import { page } from '$app/stores';
	import { writable } from 'svelte/store';
	import { items, hoverNode, scrollX, graphScroll } from '@stores';
	import { db, loadDb } from '@db'; 

	import { onMount } from 'svelte';
	import { extractLinks, createTriplets } from '@utils';
	export let data;

	let screenSize;
	let md;
	let essayData = [...data.posts].find((d) => d.path.includes($page.params.slug));

	let triplets, itemsJson;
	let visibleItemsID = [];
	let essaysItems = [];
	let article;
	let scrollTopVal;

	const updatePosition = writable(false);
	const handlePosition = () => {
		$updatePosition = true;
	};

	$: {
		$hoverNode;
		handlePosition();
	}

	onMount(async () => {
		await loadDb();
		$items = [];

		const unsubscribe = db.subscribe(async (dbData) => {
			if (dbData.length > 0) {
				itemsJson = await extractLinks(essayData.text, dbData);
				visibleItemsID = itemsJson.filter((obj) => !obj.set).map((obj) => `${obj.data?.['@id']}`);
				triplets = await createTriplets(itemsJson);

				$items = triplets;
			}
		});

		const storedLanguage = localStorage.getItem('selectedLanguage') || config.languages?.[0];

		essaysItems = data.posts.reduce((result, item) => {
			if (!item.path.includes($page.params.slug) && item.meta.lang == storedLanguage) {
				item.links.map((link) => {
					const existingEntry = result.find((entry) => entry.id === link);

					const essay = {
						title: item.meta.title,
						url: item.path
					};

					if (existingEntry) {
						if (
							!existingEntry.essays.some(
								(existingEssay) =>
									existingEssay.title === essay.title && existingEssay.url === essay.url
							)
						) {
							existingEntry.essays.push(essay);
						}
					} else {
						result.push({
							id: link,
							essays: [essay]
						});
					}
				});
			}
			return result;
		}, []);

		return () => unsubscribe();
	});

</script>

<svelte:window bind:innerWidth={screenSize} on:resize={handlePosition} on:click={handlePosition} />
<div>
	{#if essayData == undefined && triplets == undefined}
		<article>
			<section class="short_text">
				<h4>404 Page not found</h4>
			</section>
		</article>
	{:else if triplets == undefined}
		<article>
			<section class="short_text">
				<h4>Loading...</h4>
			</section>
		</article>
	{:else}
		<article
			style="--theme-color: {essayData.meta?.color || 'blue'}"
			on:resize={handlePosition}
			on:scroll={() => {
				$scrollX = article?.scrollLeft;
			}}
			on:touchmove={() => {
				$scrollX = article?.scrollLeft;
				handlePosition();
			}}
			on:click={() => {
				handlePosition();
			}}
			on:keypress
			bind:this={article}
		>
			<section
				class="markdown__container"
				bind:this={md}
				on:wheel={() => {
					handlePosition();
					$graphScroll = false;
					scrollTopVal = md?.scrollTop;
				}}
				on:scroll={() => {
					if (screenSize < 1000) {
						handlePosition();
						scrollTopVal = md?.scrollTop;
						$graphScroll = false;
					}
				}}
			>
				<Markdown data={essayData} items={itemsJson} {scrollTopVal} />
			</section>
			<section
				class="graph__container"
				on:wheel={() => {
					if (screenSize > 1000) {
						$graphScroll = true;
					}
				}}
			>
				<Graph
					items={itemsJson}
					data={$items}
					{screenSize}
					{essaysItems}
					{visibleItemsID}
					{handlePosition}
					{updatePosition}
					{config}
				/>
			</section>
			<Svg />
		</article>
	{/if}
</div>

<svelte:head>
	{#if essayData != undefined}
		<title>{essayData?.meta?.title || config.paths.title}</title>
		<meta name="description" content={essayData?.meta?.description || config.descriptionSeo} />
		<meta
			property="og:url"
			content={config?.url + essayData?.path || config.url + essayData?.path}
		/>

		<meta
			property="og:description"
			content={essayData?.meta?.description || config.descriptionSeo}
		/>
		<meta property="og:image" content={essayData?.meta?.cover || config.imageSeo} />
		<meta name="twitter:card" content="summary_large_image" />
		<meta
			property="twitter:url"
			content={config?.url + essayData?.path || config.url + essayData?.path}
		/>
		<meta name="twitter:title" content={essayData?.meta?.title || config.paths.title} />
		<meta
			name="twitter:description"
			content={essayData?.meta?.description || config.descriptionSeo}
		/>
		<meta name="twitter:image" content={essayData?.meta?.cover || config.imageSeo} />
	{/if}
</svelte:head>

<style>
	article {
		display: flex;
		height: 100vh;
		overflow: scroll;
		position: relative;
		background-color: #efefef;
	}

	.short_text {
		padding: 0.5rem 0rem 0 1rem;
	}

	.markdown__container {
		background-color: white;
		box-shadow: -10px 0px 10px 0px var(--light-grey);
		margin-left: 30vw;
		padding-left: 10px;
		padding-right: 20px;

		max-width: 480px;
		flex: 0 0 40vw;
		overflow-x: scroll;
	}

	.graph__container {
		flex: 3;
		box-shadow: -10px 0px 10px 0px var(--light-grey);
	}

	@media only screen and (max-width: 800px) {
		.markdown__container {
			padding: 0.5rem;
			min-width: 50vw;
			overflow-x: hidden;
			overflow-y: scroll;
			margin-left: 0;
		}
	}

	@media only screen and (max-width: 600px) {
		.markdown__container {
			min-width: 80vw;
			padding: 0.5rem;
			overflow-x: hidden;
			overflow-y: scroll;
			margin-left: 0;
		}
	}
</style>
