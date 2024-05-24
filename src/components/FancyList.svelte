<script lang="ts">
	export let items = [] as string[];
</script>

<ul>
	{#each items as item}
		<li class="fancy">
			<slot prop={item} />
		</li>
	{/each}
</ul>
