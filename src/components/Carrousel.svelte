<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	export let pictures: string[] = [];
	export let type: string = 'shown';
	export let automaticSlide: boolean = false;

	let currentSlide = 0;
	let intervalId: number;

	function nextSlide() {
		currentSlide = (currentSlide + 1) % pictures.length;
	}

	function previousSlide() {
		currentSlide = (currentSlide - 1 + pictures.length) % pictures.length;
	}

	function startAutoSlide() {
		intervalId = setInterval(() => {
			nextSlide();
		}, 2000);
	}

	function stopAutoSlide() {
		if (intervalId) {
			clearInterval(intervalId);
		}
	}

	onMount(() => {
		if (automaticSlide) {
			startAutoSlide();
		}
	});

	onDestroy(() => {
		stopAutoSlide();
	});
</script>

<div class="carousel">
	<button class="carousel__toggle--{type}" on:click={previousSlide}>
		<i class="material-icons">arrow_circle_left</i>
	</button>
	<button class="carousel__images" on:click={nextSlide}>
		{#each pictures as picture, index}
			<img
				class="carousel__image"
				class:active={index === currentSlide}
				src={picture}
				alt={`Picture ${index + 1}`}
			/>
		{/each}
	</button>
	<button class="carousel__toggle--{type}" on:click={nextSlide}>
		<i class="material-icons">arrow_circle_right</i>
	</button>
</div>

<style lang="scss">
	button {
		background: none;
		border: none;
		color: var(--color-primary);
		cursor: pointer;
		padding: 0;
	}

	.carousel {
		display: flex;

		&__toggle {
			&--shown {
				display: flex;
				padding: var(--spacing-1);
				align-items: center;
				cursor: pointer;
				user-select: none;
			}

			&--hidden {
				display: none;
			}
		}

		&__images > :not(.active) {
			display: none;
		}

		&__image {
			border-radius: var(--border-radius-3);
			margin: 0 0 var(--spacing-1) 0;
			width: 100%;
			aspect-ratio: 1/1;
			box-shadow: var(--shadow);
		}
	}
</style>
