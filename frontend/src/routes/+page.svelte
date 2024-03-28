<script>
	export let data;

	const { pages } = data;
</script>

<h1>Pages</h1>
{#each pages as page}
	{page.title}
{:else}
	There are no pages :(
{/each}
