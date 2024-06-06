<script lang="ts">
	export let title = '';
	let isHovered = false;
	let x: number;
	let y: number;

	function mouseOver(event: any) {
		isHovered = true;
		x = event.pageX + 5;
		y = event.pageY + 5;
	}
	function mouseMove(event: any) {
		x = event.pageX + 5;
		y = event.pageY + 5;
	}
	function mouseLeave() {
		isHovered = false;
	}
</script>

<div on:mouseover={mouseOver} on:mouseleave={mouseLeave} on:mousemove={mouseMove}>
	<slot />
</div>

{#if isHovered}
	<div style="top: {y}px; left: {x}px;" class="tooltip">{title}</div>
{/if}

<style>
	.tooltip {
		font-size: var(--font-size-lg);
		border-radius: var(--border-radius-1);
		padding: var(--spacing-1);
		position: absolute;
		/* From https://css.glass */
		background: rgba(255, 255, 255, 0.5);
		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(3px);
		-webkit-backdrop-filter: blur(3px);
		width: var(--size-15);
	}
</style>
