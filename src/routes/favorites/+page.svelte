<script lang="ts">
	import { favorites } from '../../stores/favorites';
	import { getTrails } from '../../services/trailsService';
	import TrailList from '../../components/TrailList.svelte';
	import type { Trail } from '../../types/Trail';

	let favoriteTrails: Trail[] = [];

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

<h1>Favorites</h1>
<TrailList trails={favoriteTrails} />
