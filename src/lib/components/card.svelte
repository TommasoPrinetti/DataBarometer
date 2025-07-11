<script lang="ts">
	import gdBarometerLogo from '$lib/assets/Globaldata.png';
	import QuestionMark from '$lib/components/question_mark.svelte';
	import terrainTest from '$lib/assets/terrain_test.png';
	import BarChart from '$lib/components/BarChart.svelte';
	import {
		isChartMode,
		isWorstMode,
		isCurrentCountry,
		globalOverview,
		threePillars,
		evaluationClusters
	} from '$lib/dataset/stores';
	import { slide } from 'svelte/transition';

	export let countryData;
	export let isSmall = false;
	export let index: number;
</script>

{#if $isCurrentCountry === countryData.CountryName && !isSmall}
	<div
		class="card_container"
		in:slide={{
			duration: 1500,
			axis: 'y',
			delay: 1000,
			easing: (t) =>
				t < 0
					? 0
					: t > 1
						? 1
						: t === 1
							? 1
							: t < 0.5
								? 4 * t * t * t
								: (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
		}}
		out:slide={{
			duration: 1500,
			axis: 'y',
			easing: (t) =>
				t < 0
					? 0
					: t > 1
						? 1
						: t === 1
							? 1
							: t < 0.5
								? 4 * t * t * t
								: (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
		}}
	>
		{#if !$isChartMode}
			<div class="card_columns" id="terrain_column">
				<img src={terrainTest} alt="Tunisia" class="terrain_image" />
			</div>

			<div class="card_columns" id="textual_data">
				<div>
					<div class="data_header">
						<div>
							<h2>{countryData.CountryName}</h2>
							<p>{countryData.Flag}</p>
						</div>
						<button class="download_button" aria-label="Download country data">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"
								><path
									d="M480-322.87 268.52-534.35l63.89-65.41L434.5-497.44v-310.69h91v310.69l102.09-102.32 63.89 65.41L480-322.87Zm-237.13 171q-37.78 0-64.39-26.61t-26.61-64.39v-120h91v120h474.26v-120h91v120q0 37.78-26.61 64.39t-64.39 26.61H242.87Z"
								/></svg
							>
						</button>
					</div>
					<div class="data_grid">
						<div>
							<p class="data_title">Global overview</p>
							<div class="data_triple_grid">
								{#each globalOverview as item}
									<div class="number_container">
										<h3>{item.displayName}<QuestionMark type={item.displayName} /></h3>
										<p>{countryData[item.dataKey]}<span>/{item.maxValue}</span></p>
									</div>
								{/each}
							</div>
						</div>
						<div>
							<p class="data_title">Three main pillars</p>
							<div class="data_triple_grid">
								{#each threePillars as pillar}
									<div class="number_container">
										<h3>{pillar.displayName}<QuestionMark type={pillar.displayName} /></h3>
										<p>{countryData[pillar.dataKey]}<span>/{pillar.maxValue}</span></p>
									</div>
								{/each}
							</div>
						</div>
						<div>
							<p class="data_title">Eight evaluation clusters</p>
							<div class="data_triple_grid">
								{#each evaluationClusters as cluster}
									<div class="number_container">
										<h3>{cluster.displayName}<QuestionMark type={cluster.displayName} /></h3>
										<p>{countryData[cluster.dataKey]}<span>/{cluster.maxValue}</span></p>
									</div>
								{/each}
							</div>
						</div>
					</div>
				</div>
				<img src={gdBarometerLogo} alt="GD Barometer logo" class="gd_barometer_logo" />
			</div>
		{:else if $isChartMode}
			<div class="chart_grandpa">
				<div class="data_header">
					<div>
						<h2>{countryData.CountryName}</h2>
					</div>
					<p style="align-self: center; font-size: 48px;">{countryData.Flag}</p>
					<button class="download_button" aria-label="Download country data">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"
							><path
								d="M480-322.87 268.52-534.35l63.89-65.41L434.5-497.44v-310.69h91v310.69l102.09-102.32 63.89 65.41L480-322.87Zm-237.13 171q-37.78 0-64.39-26.61t-26.61-64.39v-120h91v120h474.26v-120h91v120q0 37.78-26.61 64.39t-64.39 26.61H242.87Z"
							/></svg
						>
					</button>
				</div>
				<div class="chart_header">
					<div class="number_container">
						<h3>Population<QuestionMark type="Population" /></h3>
						<p>{countryData.Population} people</p>
					</div>
					<div class="number_container">
						<h3>Gov. form<QuestionMark type="Gov. form" /></h3>
						<p>{countryData.GovForm}</p>
					</div>
					<div class="number_container">
						<h3>GDP<QuestionMark type="GDP" /></h3>
						<p>${countryData.Gdp} million</p>
					</div>
					{#each globalOverview as item}
						<div class="number_container">
							<h3>{item.displayName}<QuestionMark type={item.displayName} /></h3>
							<p>{countryData[item.dataKey]}<span>/{item.maxValue}</span></p>
						</div>
					{/each}
				</div>
				<div class="double_column_chart">
					<div class="single_column_chart">
						<div class="column_header">
							<h2>Three main pillars</h2>
							<button class="worst_best_button" onclick={() => isWorstMode.set(!$isWorstMode)}>
								{#if $isWorstMode}
									<p>worst</p>
								{:else}
									<p>best</p>
								{/if}
							</button>
						</div>
						<div class="sx_column">
							{#each threePillars as pillar}
								<div class="vertical_chart_container">
									<BarChart
										length={countryData[pillar.dataKey]}
										maxValue={$isWorstMode ? pillar.worstValue : pillar.maxValue}
										flag={countryData.Flag}
										isVertical={true}
									/>
									<div class="number_container">
										<h3>{pillar.displayName}<QuestionMark type={pillar.displayName} /></h3>
										<p>{countryData[pillar.dataKey]}<span>/{pillar.maxValue}</span></p>
									</div>
								</div>
							{/each}
						</div>
					</div>
					<div class="single_column_chart">
						<div class="column_header">
							<h2>Eight evaluation clusters</h2>
							<button class="worst_best_button" onclick={() => isWorstMode.set(!$isWorstMode)}>
								{#if $isWorstMode}
									<p>worst</p>
								{:else}
									<p>best</p>
								{/if}
							</button>
						</div>
						<div class="dx_column">
							{#each evaluationClusters as cluster}
								<div class="single_chart_container">
									<div class="number_container">
										<h3>{cluster.displayName}<QuestionMark type={cluster.displayName} /></h3>
										<p>{countryData[cluster.dataKey]}<span>/{cluster.maxValue}</span></p>
									</div>
									<BarChart
										length={countryData[cluster.dataKey]}
										maxValue={$isWorstMode ? cluster.worstValue : cluster.maxValue}
										flag={countryData.Flag}
										isVertical={false}
									/>
								</div>
							{/each}
						</div>
					</div>
				</div>
				<img src={gdBarometerLogo} alt="GD Barometer logo" class="gd_barometer_logo" />
			</div>
		{/if}

		<button class="side_button" aria-label="Close" onclick={() => isCurrentCountry.set('')}>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"
				><path
					d="M256-192.35 192.35-256l224-224-224-224L256-767.65l224 224 224-224L767.65-704l-224 224 224 224L704-192.35l-224-224-224 224Z"
				/></svg
			>
		</button>

		<button
			class="side_button"
			aria-label="Swap"
			onclick={() => {
				isChartMode.set(!$isChartMode);
			}}
		>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"
				><path
					d="M481.52-154.26q-135.43 0-231.23-94.2-95.79-94.19-95.79-228.91v-7.24L94.09-424.2 35.7-482.83 200-647.37l164.3 164.54-58.39 58.63-60.41-60.41v6.52q0 96.89 68.83 164.86 68.82 67.97 167.19 67.97 26.72 0 52.32-6.36 25.59-6.36 50.07-19.08l67.42 67.18q-39.68 24.39-82.31 36.82-42.63 12.44-87.5 12.44Zm278.72-158.13L595.7-476.7l58.63-58.63 60.41 60.42v-6.52q0-96.9-68.95-164.86-68.94-67.97-167.31-67.97-26.72 0-52.32 6.36-25.59 6.36-50.07 19.07l-67.18-67.41q39.68-24.39 82.19-36.71 42.51-12.31 87.38-12.31 135.43 0 231.35 94.19 95.91 94.2 95.91 228.92v7.24l60.17-60.42 58.63 58.63-164.3 164.31Z"
				/></svg
			>
		</button>
	</div>
{:else if isSmall}
	<div class="small_card_sphere" style="transition-delay: {index * 0.1}s;"></div>
	<div class="small_card_container" style="transition-delay: {index * 0.1 + 1.5}s;">
		<div class="small_map">
			<img src={terrainTest} alt="Map" />
		</div>
		<div class="small_info_container">
			<div class="small_header">
				<h2>{countryData.CountryName}</h2>
				<p>{countryData.Flag}</p>
			</div>
			<div class="small_counters">
				<p>Average: <b>{countryData.Overall_per_country}</b></p>
				<p>Availability: <b>{countryData.Availability}</b></p>
				<p>Capability: <b>{countryData.Capability}</b></p>
			</div>
		</div>
	</div>
{/if}

<style>
	* {
		font-family: 'Rethink Sans', sans-serif;
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		letter-spacing: -4%;
	}

	.side_button {
		position: absolute;
		fill: white;
		width: 45px;
		height: 45px;
		border-radius: 100%;
		background-color: black;
		padding: 10px;
		right: -5%;
		top: 0;
		cursor: pointer;
		transition: transform 0.3s ease-in-out;
	}

	.side_button:hover {
		background-color: rgba(23, 23, 23, 0.5);
		transition: transform 0.1s ease-in-out;
	}

	.side_button:active {
		transform: scale(0.95);
		transition: transform 0.1s ease-in-out;
	}

	.terrain_image {
		width: 100%;
		object-fit: contain;
		height: 100%;
	}

	.side_button > svg {
		width: 100%;
		height: 100%;
	}

	.side_button:nth-of-type(2) {
		transform: translateY(110%) scale(1);
		background-color: rgb(255, 239, 65);
		fill: black;
		transition: transform 0.8s ease-in-out filter 0.3s ease-in-out background-color 0.3s ease-in-out;
	}

	.side_button:nth-of-type(2):hover {
		background-color: rgb(192, 180, 48);
		transform: translateY(110%) scale(1) rotate(180deg);
		transition: transform 0.8s ease-in-out filter 0.3s ease-in-out background-color 0.3s ease-in-out;
	}

	.side_button:nth-of-type(2):active {
		transform: translateY(110%) scale(0.95);
		transition: transform 2s ease-in-out filter 0.1s ease-in-out;
	}

	.download_button {
		fill: white;
		width: 30px;
		height: 30px;
		transition: transform 0.3s ease-in-out;
	}

	.gd_barometer_logo {
		width: 150px;
		align-self: flex-end;
	}

	.chart_grandpa > .gd_barometer_logo {
		position: absolute;
		bottom: 1%;
		left: 50%;
		transform: translateX(-50%);
		display: block;
		width: 120px;
	}

	.download_button:active {
		fill: #8e8e8e;
		transform: scale(0.95);
		transition: transform 0.1s ease-in-out;
	}

	.card_container {
		position: absolute;
		bottom: 50%;
		left: 50%;
		transform: translate(-50%, 55%) scale(0.8);
		background-color: #000;
		display: flex;
		flex-direction: row;
		width: 80%;
		height: 90%;
		justify-content: space-between;
		border-radius: 30px;
		padding: 20px;
		background-color: black;
		column-gap: 20px;
		z-index: 10;
	}

	.card_columns {
		width: 48%;
		height: 100%;
		border-radius: 20px;
		background-color: rgb(251, 251, 251);
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		color: white;
	}

	.card_columns:nth-of-type(2) {
		background-color: transparent;
		width: 50%;
	}

	.card_columns:nth-of-type(2) > div {
		display: flex;
		flex-direction: column;
		row-gap: 35px;
		width: 100%;
	}

	.data_header {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-start;
		overflow: visible;
	}

	.data_header > :nth-child(1) {
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		column-gap: 10px;
		overflow: visible;
	}

	.data_header > div > h2 {
		font-size: 48px;
	}

	.data_header > div > p {
		color: #8e8e8e;
	}

	.data_grid {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: left;
		row-gap: 70px;
	}

	.data_grid > div {
		display: flex;
		flex-direction: column;
		row-gap: 0px;
		width: 100%;
	}

	.data_triple_grid {
		width: 100%;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-row-gap: 10px;
		align-items: flex-start;
	}

	.number_container {
		width: 100%;
		max-width: 130px;
		height: fit-content;
		padding-top: 2px;
		padding-bottom: 2px;
		row-gap: 0px;
		display: flex;
		flex-direction: column;
		overflow: visible;
	}

	.number_container > h3 {
		font-size: 20px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		overflow: visible;
		position: relative;
	}

	.number_container > p > span {
		color: #8e8e8e;
	}

	.data_title {
		font-size: 12px;
		color: #ababab;
		width: 100%;
		overflow: ellipsis;
		white-space: nowrap;
	}

	.chart_grandpa {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		row-gap: 15px;
		align-items: center;
	}

	.chart_grandpa > .data_header {
		color: white;
	}

	.chart_header {
		display: flex;
		height: fit-content;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		background-color: white;
		color: black;
		width: 100%;
		border-radius: 20px;
		padding-left: 20px;
		padding-right: 20px;
	}

	.chart_header > .number_container {
		width: max-content;
		padding-top: 10px;
		padding-bottom: 10px;
	}

	.chart_header > .number_container > p {
		color: black;
	}

	.chart_header > .number_container > h3,
	.single_chart_container > :nth-child(1) > h3 {
		font-size: 14px;
		display: flex;
		flex-direction: row;
		align-items: center;
		column-gap: 5px;
	}

	.chart_header > .number_container > p,
	.single_chart_container > :nth-child(1) > p {
		font-size: 12px;
		color: black;
	}

	.double_column_chart {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		background-color: transparent;
		border-radius: 20px;
		padding: 0px;
		column-gap: 20px;
		position: relative;
	}

	.single_column_chart {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-start;
		background-color: transparent;
		row-gap: 5px;
	}

	.column_header {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.column_header > h2,
	p {
		color: white;
	}

	.single_column_chart > :nth-child(2) {
		width: 100%;
		height: 100%;
		background-color: white;
		border-radius: 20px;
		display: flex;
		justify-content: space-between;
		padding: 20px 10px;
		position: relative;
	}

	.sx_column {
		flex-direction: row;
		justify-content: center !important;
		column-gap: 90px;
	}

	.dx_column {
		flex-direction: column;
		align-items: center;
	}

	.single_chart_container {
		display: flex;
		flex-direction: row;
		width: 100%;
		align-items: flex-start;
		column-gap: 10px;
	}

	.single_chart_container > :nth-child(1) {
		width: 35%;
		height: 100%;
		text-align: right;
	}

	.single_chart_container > :nth-child(1) > h3 {
		flex-direction: row-reverse;
		display: inline-flex;
	}

	.vertical_chart_container {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		height: 100%;
		justify-content: flex-end;
	}

	:global(.vertical_chart_container > .chart) {
		width: 100%;
		height: 100%;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		column-gap: 10px;
	}

	:global(.vertical_chart_container > .chart > .box_chart) {
		width: 30px;
		height: 100%;
		display: flex;
		flex-direction: column-reverse;
		column-gap: 5px;
		align-items: center;
	}

	:global(.vertical_chart_container > .number_container > p) {
		color: black;
		text-align: center;
	}

	:global(.vertical_chart_container > .chart > .box_chart:nth-of-type(1) > div) {
		width: 100%;
		background-color: #7a7a7a;
		border-radius: 5px;
		transition: height 0.8s ease-in-out;
	}

	:global(.vertical_chart_container > .chart > .box_chart:nth-of-type(2) > div) {
		border-radius: 5px;
		width: 100%;
		background-color: #d9d9d9;
		transition: height 0.8s ease-in-out;
	}

	.small_card_container {
		width: 250px;
		height: 115px;
		display: inline-flex;
		flex-direction: row;
		column-gap: 4px;
		padding: 4px;
		justify-content: space-between;
		background-color: rgba(0, 0, 0, 1);
		border-radius: 6px;
		position: static;
		font-size: 8px;
		backface-visibility: hidden;
		-moz-backface-visibility: hidden;
		-webkit-backface-visibility: hidden;
		-ms-backface-visibility: hidden;
		user-select: none;
		pointer-events: none;
		opacity: 0;
		transform: scale(0);
		transition:
			transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1),
			opacity 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
		transition-delay: 3s;
	}

	.small_card_sphere {
		width: 20px;
		height: 20px;
		border-radius: 100%;
		background-color: yellow;
		position: absolute;
		top: -9%;
		left: -9%;
		opacity: 0;
		transform: scale(0);
		transition:
			transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1),
			opacity 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
	}

	:global(.small_card_container.minimized) {
		transform: scale(0);
		transition: transform 0.3s ease-in-out;
	}

	.small_map {
		width: 50%;
		height: 100%;
		background-color: white;
		border-radius: 3px;
		overflow: hidden;
		box-sizing: border-box;
	}

	:global(.small_map > img, picture) {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}

	.small_info_container {
		width: 100%;
		height: 100%;
		background-color: transparent;
		border-radius: 5px;
		justify-content: space-between;
		display: flex;
		flex-direction: column;
	}

	.small_header {
		display: inline-flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		width: 100%;
	}

	.small_counters {
		height: fit-content;
		display: flex;
		flex-direction: column;
		row-gap: 1px;
	}

	.small_counters > p {
		font-size: 12px;
	}

	.small_header h2 {
		font-size: 18px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.small_header p {
		font-size: 12px;
	}

	.worst_best_button {
		width: fit-content;
		height: fit-content;
		border: 1px solid white;
		border-radius: 10px;
		padding-right: 10px;
		padding-left: 10px;
	}

	.worst_best_button:hover {
		background-color: rgb(50, 50, 50);
		color: rgb(255, 255, 255);
		transform: scale(1.05);
		transition: transform 0.1s ease-in-out;
	}

	.worst_best_button:active {
		background-color: white;
		color: black;
		transform: scale(0.95);
		transition: transform 0.1s ease-in-out;
	}

	.worst_best_button:active > p {
		color: rgb(0, 0, 0);
	}

	:global(.markers.show > .small_card_sphere) {
		transition-delay: 0s;
		transform: scale(1);
		opacity: 1;
		transition:
			transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1),
			opacity 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
		transition-delay: 0s;
	}

	:global(.markers.show > .small_card_container) {
		transition-delay: 3s;
		transform: scale(1);
		opacity: 1;
		transition:
			transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1),
			opacity 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
		transition-delay: 1.5s;
	}
</style>
