<script>
	export let data;

	const { pages } = data;
</script>

<h1>Pages</h1>
{#if pages.length > 0}
	{#each pages as page}
		{page.title}
	{/each}
{:else}
	There are no pages :(
{/if}
