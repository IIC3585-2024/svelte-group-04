<script lang="ts">
	import Carrousel from '../components/Carrousel.svelte';
	import Tooltip from '../components/Tooltip.svelte';
	export let data;
</script>

<svelte:head>
	<title>Trails App</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<div class="home__greetings">
		<h2 class="home__app">Outdoor Life</h2>
		<h1 class="home__title">
			Discover the <span class="home__title--highlight">best trails</span> in the world!
		</h1>
		<p>
			Get personalized trail recommendations, read reviews and view maps. Outdoor Life makes your
			hiking adventures easy and enjoyable.
		</p>
	</div>
	<div class="home__images">
		<div class="home__vimages">
			{#each data.trails.slice(0, 2) as trail, index}
				<Tooltip title={trail.title}>
					<a href={`/trails/${trail.id}`}>
						{#if index === 0}
							<Carrousel pictures={trail.pictures} type={'hidden'} automaticSlide={true} />
						{:else}
							<img class="home__image" src={trail.pictures[0]} alt={`Picture trail ${trail.id}`} />
						{/if}
					</a>
				</Tooltip>
			{/each}
		</div>
		<div class="home__vimages">
			{#each data.trails.slice(2) as trail, index}
				<Tooltip title={trail.title}>
					<a href={`/trails/${trail.id}`}>
						<img class="home__image" src={trail.pictures[0]} alt={`Picture trail ${trail.id}`} />
					</a>
				</Tooltip>
			{/each}
		</div>
	</div>
</section>

<style lang="scss">
	section {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: space-between;
		flex-wrap: wrap;
		flex: 0.6;
		gap: var(--spacing-3);
	}

	.home {
		&__greetings {
			display: flex;
			flex-direction: column;
			justify-content: center;
			width: 30%;
			min-width: 300px;
		}

		&__app {
			color: var(--color-primary);
		}

		&__title {
			font-size: var(--font-size-xlg);
			font-weight: 500;
			color: var(--color-primary);
			margin: 0 0 var(--spacing-3) 0;

			&--highlight {
				font-weight: 700;
				color: var(--color-highlight);
			}
		}

		&__images {
			display: flex;
			flex-direction: row;
			justify-content: center;
			flex-wrap: wrap;
			align-items: center;
			gap: var(--spacing-5);
		}

		&__vimages {
			width: var(--size-20);
			display: flex;
			flex-direction: column;
			gap: var(--spacing-5);
		}

		&__image {
			border-radius: var(--border-radius-3);
			margin: 0 0 var(--spacing-5) 0;
			width: 100%;
			box-shadow: var(--shadow);
			cursor: pointer;
		}
	}
</style>
