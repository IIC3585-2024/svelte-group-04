<script setup lang="ts">
	import type { Trail } from '../types/Trail';
	import TrailCard from './TrailCard.svelte';
	// import { useFavoritesStore } from '../stores/favorites';

	export let trails: Trail[] = [];

	// const favoritesStore = useFavoritesStore();
</script>

<div class="trail-list">
	{#each trails as trail}
		<a href={`/trails/${trail.id}`}>
			<TrailCard {trail} />
		</a>
	{/each}
</div>

<style lang="scss">
	.trail-list {
		display: grid;
		gap: 2rem;
		margin: 0 var(--spacing-4);

		@media (min-width: 1200px) {
			grid-template-columns: repeat(3, 1fr);
		}

		@media (min-width: 992px) and (max-width: 1199px) {
			grid-template-columns: repeat(2, 1fr);
		}

		@media (max-width: 991px) {
			grid-template-columns: repeat(1, 1fr);
		}
	}
</style>
