<script lang="ts">
	import Carrousel from '../components/Carrousel.svelte';
	export let data;
</script>

<svelte:head>
	<title>Trails App</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<div class="home__greeting">
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
			<Carrousel pictures={data.trails[0].pictures} type={'hidden'} automaticSlide={true} />
			<img class="home__image" src={data.trails[1].pictures[0]} alt="1" />
		</div>
		<div class="home__vimages">
			<img class="home__image" src={data.trails[2].pictures[0]} alt="1" />
			<img class="home__image" src={data.trails[3].pictures[0]} alt="1" />
		</div>
	</div>
</section>

<style lang="scss">
	section {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: space-between;
		flex: 0.6;
		gap: var(--spacing-3);
	}

	.home {
		&__greeting {
			display: flex;
			flex-direction: column;
			justify-content: center;
		}

		&__images {
			display: flex;
			flex-direction: row;
			justify-content: center;
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
			margin: 0 0 0 0;
			width: 100%;
			box-shadow: var(--shadow);
		}
	}
</style>
