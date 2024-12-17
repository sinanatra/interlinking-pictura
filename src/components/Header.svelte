<script>
	export let title;
	export let lang;
	export let description;
</script>

<header>
	<h1>{title}</h1>
	{#if description[lang]}
		<h3>
			{description[lang]}
		</h3>
	{/if}
	<div>
		<img src="logo1.png" />
		<img src="logo2.jpg" />
	</div>
</header>

<style>
	div {
		margin-top: 20px;
		display: flex;
		gap: 10px;
	}
	
	img {
		max-width: 100px;
		height: fit-content;
		mix-blend-mode: multiply;
	}
	
	header {
		padding: 10px;
		flex: 0 0 380px;
		background-color: #efefef;
	}

	h1 {
		min-height: 150px;
		font-size: 30px;
		line-height: 30px;
		padding-bottom: 10px;

	}

	h3 {
		font-weight: 400;
		font-size: 1.2rem;
	}
	span {
		color: blue;
	}

	@media only screen and (max-width: 800px) {
		h3 {
			width: 100%;
			padding-top: 20px;
		}
	}
</style>
