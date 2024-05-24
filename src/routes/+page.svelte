<script>
	import Counter from '../components/Counter.svelte';
</script>

<svelte:head>
	<title>Trails App</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h2>try editing <strong>src/routes/+page.svelte</strong></h2>
	<Counter count={10} isActive={true}></Counter>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
</style>
