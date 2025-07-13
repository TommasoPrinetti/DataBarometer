<script lang="ts">
	export let length: number;
	export let maxValue: number;
	export let flag: string;
	export let isVertical: boolean = false;

	import { isWorstMode } from '$lib/stores.js';
</script>

<div class="chart">
	<div class="box_chart">
		{#if isVertical}
			<div style="height: {length}%"></div>
		{:else}
			<div style="width: {length}%"></div>
		{/if}
		<p>{flag}</p>
	</div>

	<div class="box_chart">
		{#if isVertical}
			<div style="height: {maxValue}%"></div>
		{:else}
			<div style="width: {maxValue}%"></div>
		{/if}
		{#if !$isWorstMode}
			<p>🥇</p>
		{:else}
			<p>👎</p>
		{/if}
	</div>
</div>

<style>
	.chart {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		row-gap: 5px;
	}

	.box_chart {
		width: 100%;
		height: 15px;
		display: flex;
		flex-direction: row;
		column-gap: 5px;
		align-items: center;
	}

	.box_chart:nth-of-type(1) > div {
		height: 100%;
		background-color: #7a7a7a;
		border-radius: 5px;
		transition: width 0.8s ease-in-out;
	}

	.box_chart:nth-of-type(2) > div {
		border-radius: 5px;
		height: 100%;
		background-color: #d9d9d9;
		transition: width 0.8s ease-in-out;
	}
</style>
