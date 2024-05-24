<script>
	import { page } from '$app/stores';
	import Badge from '../../../components/Badge.svelte';
	import Carrousel from '../../../components/Carrousel.svelte';
	import Favorite from '../../../components/Favorite.svelte';
	import Rating from '../../../components/Rating.svelte';
	import { isFavorite, toggleFavorite } from '../../../stores/favorites';

	const { id } = $page.params;
	export let data;
	let trail = data.trail;

	const handleFavorite = () => {
		toggleFavorite(trail.id);
	};
</script>

<h1>Hello {id}</h1>
<div class="flex">
	<div class="trail">
		<Carrousel pictures={trail.pictures} />
		<div class="trail__head">
			<div class="trail__title">{trail.title}</div>
		</div>
		<div class="trail__content">
			<div class="trail__activity">
				<Badge icon="hiking" text="trail.activity" />
				<div class="trail__icons">
					<Rating score={trail.stats.rank} />
					<Favorite isFavorite={isFavorite(trail.id)} on:click={handleFavorite} />
				</div>
			</div>
			<div class="trail__description">{trail.description}</div>
		</div>
	</div>
</div>

<style lang="scss">
	.trail {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		max-width: var(--sizing-sm);
		margin: var(--spacing-5) var(--spacing-3) var(--spacing-5) var(--spacing-3);
		padding: var(--spacing-1);

		&__head {
			display: flex;
			justify-content: space-between;
			align-items: center;
			width: 100%;
		}

		&__content {
			display: flex;
			flex-direction: column;
			align-items: start;
			width: 100%;
		}

		&__title {
			font-size: var(--font-size-med);
			font-weight: bold;
		}

		&__activity {
			margin-bottom: var(--spacing-1);
			margin-top: var(--spacing-1);
			width: 100%;
			display: flex;
			justify-content: space-between;
		}

		&__icons {
			display: flex;
			justify-content: flex-end;
			gap: var(--spacing-2);
		}
	}
</style>
