<script>
	import TrailList from '../../components/TrailList.svelte';
	import { getTrails } from '../../services/trailsService';
</script>

<h1>Trails Page</h1>

{#await getTrails()}
	<p>Waiting</p>
{:then trails}
	<TrailList {trails} />
{:catch error}
	<p>{error.message}</p>
{/await}
