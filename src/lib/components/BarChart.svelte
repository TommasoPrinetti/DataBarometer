<script lang="ts">
	export let length: number;
	export let maxValue: number;
	export let flag: string;
	export let isVertical: boolean = false;

	import { isWorstMode } from '$lib/stores.js';
	import { slide } from 'svelte/transition';
</script>

<div class="chart">
	<div class="box_chart">
		{#if isVertical}
			{#if length > 0}
				<div style="height: {length}%" in:slide={{ duration: 1500, axis: 'y', delay: 1000 }}></div>
			{:else}
				<div style="height: 1%; background-color: #ff0000" in:slide={{ duration: 1500, axis: 'y', delay: 1000 }}></div>
			{/if}
		{:else}
		{#if length > 0}
				<div style="width: {length}%"></div>
			{:else}
				<div style="width: 1%; background-color: #ff0000"></div>
			{/if}
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
		height: 30%;
		display: flex;
		flex-direction: row;
		column-gap: 5px;
		align-items: center;
		transition:
			width 0.8s ease-in-out,
			height 0.8s ease-in-out;
	}

	.box_chart > div {
		transition: all 0.8s ease-in-out;
	}

	.box_chart:nth-of-type(2) {
		transition: height 0.8s ease-in-out;
	}

	.box_chart:nth-of-type(1) > div {
		height: 100%;
		background-color: #7a7a7a;
		border-radius: 5px;
		transition:
			width 0.8s ease-in-out,
			height 0.8s ease-in-out;
	}

	.box_chart:nth-of-type(2) > div {
		border-radius: 5px;
		height: 100%;
		background-color: #d9d9d9;
		transition:
			width 0.8s ease-in-out,
			height 0.8s ease-in-out;
	}
</style>
