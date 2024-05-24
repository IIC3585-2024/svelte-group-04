<script setup lang="ts">
	export let score: string = '';
</script>

<div class="rating">
	<i class="material-icons rating__star">star</i>
	<div>{score}</div>
</div>

<style scoped lang="scss">
	.rating {
		display: flex;
		align-items: center;
		gap: var(--spacing-1);

		&__star {
			color: #f1c40f;
		}
	}
</style>
