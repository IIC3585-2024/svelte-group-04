<script lang="ts">
	import { favorites } from '../../stores/favorites';
	import { getTrails } from '../../services/trailsService';
	import TrailList from '../../components/TrailList.svelte';
	import type { Trail } from '../../types/Trail';
	import Loader from '../../components/Loader.svelte';

	let favoriteTrails: Trail[] | undefined = undefined;

	favorites.subscribe(async (value) => {
		if (!value) return;

		if (value.length === 0) {
			favoriteTrails = [];
			return;
		}

		favoriteTrails = await getTrails({ ids: value });
		console.log('favorites', value);
	});
</script>

<div class="flex">
	<h1>Favorites</h1>
	{#if favoriteTrails === undefined}
		<Loader />
	{:else if favoriteTrails.length === 0}
		<p>No favorite trails</p>
	{:else}
		<TrailList trails={favoriteTrails} />
	{/if}
</div>
