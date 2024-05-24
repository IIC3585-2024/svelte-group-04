<script lang="ts">
	export let icon: string | undefined = undefined;
	export let text = '';
</script>

<div class="badge">
	{#if icon}
		<i class="material-icons">{icon}</i>
	{/if}
	<div>{text}</div>
</div>

<style lang="scss">
	.badge {
		display: flex;
		gap: var(--spacing-1);
		align-items: center;
		background-color: var(--color-secondary);
		padding: var(--spacing-1) var(--spacing-2);
		border-radius: var(--border-radius-3);
		font-size: var(--font-size-sm);

		i {
			font-size: var(--font-size-med);
		}
	}
</style>
