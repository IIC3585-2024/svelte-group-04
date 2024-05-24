<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let isFavorite = false;
	export let type: 'filled' | undefined = undefined;

	const dispatch = createEventDispatcher();

	const handleClick = () => {
		isFavorite = !isFavorite;
		dispatch('click', { isFavorite });
	};
</script>

<div class={`favorite favorite--${type}`}>
	<button on:click|preventDefault|stopPropagation={handleClick}>
		<i class="material-icons favorite__heart" class:favorite__heart--active={isFavorite}>
			{isFavorite ? 'favorite' : 'favorite_border'}
		</i>
	</button>
</div>

<style lang="scss">
	button {
		background: none;
		border: none;
		padding: 0;
		margin: 0;
		font-size: 0.1rem;
	}

	.favorite {
		display: flex;
		justify-content: center;
		align-items: center;

		&:hover {
			transform: scale(1.1);
			transition: transform 0.5s ease;
		}

		&--filled {
			background-color: var(--color-background-mute);
			border-radius: var(--size-5);
			padding: var(--size-05);
			box-shadow: var(--shadow);
		}

		&__heart {
			color: var(--color-secondary);
			transition:
				color 0.5s ease,
				transform 0.5s ease;

			&--active {
				color: var(--color-highlight);
			}

			&:hover {
				cursor: pointer;
			}
		}
	}
</style>
