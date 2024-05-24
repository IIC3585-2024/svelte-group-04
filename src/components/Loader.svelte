<script lang="ts">
	import type { Size } from '../types/Size';

	export let size: Size = 'md';
</script>

<div class={`loader loader--${size}`}></div>

<style lang="scss">
	.loader {
		width: var(--size-5);
		height: var(--size-5);
		border-radius: 50%;
		border: 4px solid #f3f3f3;
		border-top: 4px solid #3498db;
		animation: spin 1s linear infinite;

		&--sm {
			width: var(--size-3);
			height: var(--size-3);
		}

		&--md {
			width: var(--size-5);
			height: var(--size-5);
		}

		&--lg {
			width: var(--size-7);
			height: var(--size-7);
		}
	}

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>
