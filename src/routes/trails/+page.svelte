<script lang="ts">
	import TrailList from '../../components/TrailList.svelte';
	export let data;
</script>

<div class="flex">
	<h1>Trails Page</h1>
	<TrailList trails={data.trails} />
</div>
