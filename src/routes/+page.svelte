<script lang="ts">
	import { onMount } from 'svelte';
	import { Canvas, T } from '@threlte/core';
	import Planet from '$lib/components/planet.svelte';
	import Card from '$lib/components/card.svelte';
	import Explore from '$lib/components/explore.svelte';
	import { isPlanetReady, isCurrentCountry } from '$lib/stores.js';
	import { writable } from 'svelte/store';
	import Lenis from 'lenis';
	import 'lenis/dist/lenis.css';
	import gdBarometerLogo from '$lib/assets/globaldatabarometer.png';

	/** @type {import('./$types').PageProps} */
	let { data } = $props();
	let currentIndex = $state(0);

	$effect(() => {
		currentIndex = data.data.findIndex((country: any) => country.CountryName === $isCurrentCountry);
	});

	let exploreWrapper: HTMLElement;
	let heroSection: HTMLElement;
	let lenis: Lenis;

	onMount(async () => {
		lenis = new Lenis({
			autoRaf: true,
			smoothWheel: true,
			duration: 1.2,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			orientation: 'vertical',
			touchMultiplier: 2,
			wheelMultiplier: 1,
			infinite: false
		});

		lenis.stop();
	});

	$effect(() => {
		if ($isPlanetReady) {
			setTimeout(() => {
				lenis.start();
			}, 200);
		} else {
			lenis.stop();
		}
	});
</script>

<header class:in={$isPlanetReady}>
	<div>
		<button
			onclick={() => {
				window.location.href = '/about';
			}}
		>
			<p>About</p>
		</button>

		<button>
			<p>Github</p>
		</button>
	</div>

	<div class="header_grey_button">
		<svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#1f1f1f"><path d="M480-100q-78.85 0-148.2-29.92t-120.65-81.21q-51.3-51.29-81.22-120.63Q100-401.1 100-479.93q0-78.84 29.93-148.21 29.92-69.37 81.22-120.68t120.65-81.25Q401.15-860 480-860q140.08 0 244.27 88.19t128.65 220.73q-15.38-6.92-31.37-10.48-15.99-3.56-33.09-4.21-19.77-71.46-68.69-127.11-48.92-55.66-119.77-83.89V-760q0 33-23.5 56.5T520-680h-80v80q0 17-11.5 28.5T400-560h-80v80h240q10.29 0 19.19 4.92 8.89 4.93 14.27 13.77-15.88 26.05-24.28 54.99-8.41 28.93-8.41 59.78 0 58.77 30.38 110.08 30.39 51.3 61.7 95.23-39.47 20-82.73 30.61Q526.85-100 480-100Zm-40-62v-78q-33 0-56.5-23.5T360-320v-40L168-552q-3 18-5.5 36t-2.5 36q0 121 79.5 212T440-162Zm340 62q-5.08 0-8.95-3.01-3.88-3.01-5.43-7.53-11-34.62-30.43-64.42-19.42-29.81-42.04-58.43-19.46-24.46-32.07-52.96-12.62-28.5-12.62-60.36 0-54.37 38.53-92.87 38.53-38.5 93.04-38.5 54.51 0 93.01 38.53 38.5 38.52 38.5 93.01 0 31.54-12.84 59.82-12.84 28.29-31.85 53.33-22.24 29-41.93 58.64-19.7 29.64-30.54 64.21-1.55 4.52-5.43 7.53Q785.08-100 780-100Zm0-93.38q11.15-18.93 23.92-35.54 12.77-16.62 24.93-33.54 14-18.58 24.5-39.6 10.5-21.02 10.5-44.48 0-34.92-24.47-59.38-24.46-24.47-59.38-24.47t-59.38 24.47q-24.47 24.46-24.47 59.38 0 23.46 10.5 44.48 10.5 21.02 24.5 39.6 13.16 16.92 25.43 33.73 12.27 16.81 23.42 35.35Zm1.15-110.85q-17.77 0-30.03-12.27-12.27-12.27-12.27-30.04t12.27-30.04q12.26-12.27 30.03-12.27 17.77 0 30.04 12.27t12.27 30.04q0 17.77-12.27 30.04t-30.04 12.27Z"/></svg>
		<button onclick={() => {
			window.open('https://globaldatabarometer.org/', '_blank');
		}}
		>
			<p>Learn more about the Global Data Barometer ↗︎</p>
		</button>
	</div>
	
	<div>
		
	</div>

	<div>
		<button
			onclick={() => {
				const link = document.createElement('a');
				link.href = '/dataset.csv';
				link.download = 'Distilled_dataset.csv';
				link.click();
			}}
		>
			<p>Download the distilled dataset</p>
		</button>
	</div>
	
</header>
<section class="hero_section" bind:this={heroSection}>
	<div class="hero_title" class:out={$isPlanetReady}>
		<h1 id="desktop_show">
			Governments produce <span>a lot of data</span>, <br /> but is it actually
			<span>open and available?</span>
		</h1>
		<h1 id="mobile_show">
			Governments produce <span>a lot of data</span>, but is it actually
			<span>open and available?</span>
		</h1>
	</div>

	<button
		class="explore_button"
		class:in={$isPlanetReady}
		onclick={() =>
			lenis.scrollTo(exploreWrapper, {
				duration: 1.2,
				easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
			})}
	>
		<h2>Explore the dataset</h2>
	</button>

	<div class="planet-wrapper" class:out={$isPlanetReady}>
		<Canvas>
			<Planet
				earthMap={data.earthMap}
				normalMap={data.normalMap}
				specularMap={data.specularMap}
				coordinates={data.coordinates}
				countriesData={data.data}
				countryImages={data.countryImages}
			/>
		</Canvas>
	</div>
</section>

<section class="explore_wrapper" bind:this={exploreWrapper}>
	<Explore countriesData={data.data} />
	{#if data.data[currentIndex]}
		<Card
			countryData={data.data[currentIndex]}
			isSmall={false}
			index={currentIndex}
			countryImages={data.countryImages}
		/>
	{/if}
</section>

<style>
	.hero_section {
		width: 100%;
		height: 100vh;
		max-height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		overflow: hidden;
	}

	:global(.planet-wrapper) {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 1;
		transform: translateY(0);
		opacity: 0;
		transition: all 3.2s cubic-bezier(0.165, 0.84, 0.44, 1);
		pointer-events: auto;
	}

	:global(.planet-wrapper.out) {
		transform: translateY(0);
		opacity: 1;
		transition: all 3.2s cubic-bezier(0.165, 0.84, 0.44, 1);
	}

	:global(canvas) {
		width: 100% !important;
		height: 100% !important;
		max-width: 100%;
		object-fit: contain;
		pointer-events: auto;
	}

	.explore_wrapper {
		width: 100%;
		height: 100vh;
		position: relative;
		z-index: 10;
		background-color: transparent;
		scroll-snap-align: start;
		scroll-snap-type: y mandatory;
		pointer-events: none;
	}

	:global(.explore_wrapper > *) {
		pointer-events: auto;
	}

	.hero_title {
		position: relative;
		z-index: 2; /* above planet-wrapper (z-index 1) */
		width: 100%;
		z-index: 2;
		clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0% 100%);
		transition:
			clip-path 1.2s cubic-bezier(0.165, 0.84, 0.44, 1),
			transform 1.2s cubic-bezier(0.165, 0.84, 0.44, 1);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		align-self: center;
		padding-top: 10%;
		color: black;
		background-color: transparent;
		pointer-events: all !important;
		user-select: text;
		-webkit-user-select: text;
		-moz-user-select: text;
		-ms-user-select: text;
	}

	:global(.hero_title.out) {
		clip-path: polygon(0 100%, 100% 100%, 100% 0, 0 0);
		transition:
			clip-path 1.2s cubic-bezier(0.165, 0.84, 0.44, 1),
			transform 1.2s cubic-bezier(0.165, 0.84, 0.44, 1);
	}

	:global(.hero_title > h1 > span) {
		clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0% 100%);
		transform: translateY(200%);
		transition-delay: 10s;
		transition:
			clip-path 1.2s cubic-bezier(0.165, 0.84, 0.44, 1),
			transform 1.2s cubic-bezier(0.165, 0.84, 0.44, 1);
		color: black;
		background-color: transparent;
		overflow: visible;
	}

	:global(.hero_title.out > h1 > span) {
		clip-path: polygon(0 100%, 100% 100%, 100% 0, 0 0);
		transform: translateY(0);
		transition-delay: 10s;
		transition:
			clip-path 1.2s cubic-bezier(0.165, 0.84, 0.44, 1),
			transform 1.2s cubic-bezier(0.165, 0.84, 0.44, 1);
	}

	.explore_button {
		position: sticky;
		top: 90%;
		left: 50%;
		transform: translate(-50%, 200%);
		z-index: 1000;
		background-color: rgba(255, 255, 255, 0.8);
		backdrop-filter: blur(10px);
		color: #000000;
		border: 1px solid #000000;
		padding: 10px 20px;
		border-radius: 20px;
		cursor: pointer;
		font-size: 16px;
		z-index: 12;
		transition:
			transform 1.2s cubic-bezier(0.165, 0.84, 0.44, 1),
			opacity 1.7s cubic-bezier(0.165, 0.84, 0.44, 1);
	}

	.explore_button.in {
		transition:
			transform 2.2s cubic-bezier(0.165, 0.84, 0.44, 1),
			opacity 1.7s cubic-bezier(0.165, 0.84, 0.44, 1);
		transition-delay: 1.2s;
		transform: translate(-50%, 0%);
	}

	.explore_button:hover {
		filter: blur(0px);
		transition:
			filter 0.3s ease-in-out,
			backdrop-filter 0.3s ease-in-out,
			background-color 0.3s ease-in-out,
			border 0.3s ease-in-out;
		transition-delay: 0.08s;
		background-color: rgba(235, 235, 235, 0.62);
	}

	.explore_button:active {
		transform: translateX(-50%) scale(0.98);
		transition: transform 0.1s ease-in-out;
	}

	:global(#mobile_show) {
		display: none;
	}

	:global(#desktop_show) {
		display: block;
	}

	.header_grey_button {
		display: flex;
		flex-direction: row;
		column-gap: 2px;
		align-items: center;
		justify-content: center;
		border-radius: 10px;
	
		width: fit-content;
		height: fit-content;
	}

	.header_grey_button > :nth-child(1) {
		width: 25px;
		height: 25px;
		background-color: #E4E4E4;
		padding: 2px 5px;
		border-radius: 5px;
	}

	.header_grey_button > *:hover {
		transition:
			filter 0.3s ease-in-out,
			backdrop-filter 0.3s ease-in-out,	
			background-color 0.3s ease-in-out,
			border 0.3s ease-in-out;
		transition-delay: 0.08s;
		background-color: rgba(235, 235, 235, 0.62);
	}

	.header_grey_button > :nth-child(2) {
		width: fit-content;
		height: 20px;
		background-color: #E4E4E4;
		padding: 3px 5px;
		border-radius: 5px;
	}

	@media (max-width: 768px) {
		.hero_title {
			height: fit-content;
			width: 100%;
			padding: 10vh 10px 0px 10px;
		}

		.explore_button {
			display: none;
		}

		:global(body, html) {
			height: 100%;
			position: relative;
		}

		.hero_section {
			height: 100vh;
			max-height: 100%;
			position: relative;
		}

		:global(h1) {
			font-size: 20px;
			font-weight: 200;
			font-style: normal;
			text-transform: uppercase;
			line-height: 113.372%;
			letter-spacing: -1px;
			text-align: center;
		}

		h1 > span {
			font-style: italic;
			text-decoration: none;
			text-decoration-thickness: 4px;
			text-underline-offset: 4px;
			transition: all 0.3s ease-in-out;
		}

		.hero_title > h1 > span {
			font-style: normal;
			clip-path: none;
		}

		header {
			align-items: center;
			justify-content: center;
			padding: 20px;
			top: 0%;
			background-color: #e2e2e2;
			border-radius: 0px 0px 10px 10px;
		}

		header > div:nth-child(2),
		header > div:nth-child(3) {
			display: none;
		}

		header > div:nth-child(1) {
			width: 40%;
			border-radius: 10px;
		}

		header > div:nth-child(1) > button,
		header > div:nth-child(1) > button > img {
			width: 100%;
		}

		.explore_wrapper {
			display: auto;
			position: absolute;
		}

		.planet-wrapper {
			filter: blur(0px);
			transition-delay: 6s;
			transition: filter 2s ease-in-out;
		}

		.planet-wrapper.out {
			filter: blur(2px);
			transition-delay: 3s;
			transition: filter 2s ease-in-out;
		}

		:global(#mobile_show) {
			display: block;
		}

		:global(#desktop_show) {
			display: none;
		}
	}
</style>
