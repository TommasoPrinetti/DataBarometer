<script lang="ts">
	import { onMount } from 'svelte';
	import { Canvas, T } from '@threlte/core';
	import Planet from '$lib/components/planet.svelte';
	import Card from '$lib/components/card.svelte';
	import Explore from '$lib/components/explore.svelte';
	import { isPlanetReady } from '$lib/stores.js';
	import Lenis from 'lenis';
	import 'lenis/dist/lenis.css';
	import gdBarometerLogo from '$lib/assets/globaldatabarometer.png';

	/** @type {import('./$types').PageProps} */
	let { data } = $props();

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

<header>
	<div>
		<button>
			<img src={gdBarometerLogo} alt="GD Barometer logo" class="gd_barometer_logo" />
		</button>
	</div>

	<div>
		<button
			onclick={() => {
				window.open('https://globaldatabarometer.org/', '_blank');
			}}
		>
			<p>Learn more about the Global Data Barometer ↗︎</p>
		</button>
		<button
			onclick={() => {
				window.open('https://globaldatabarometer.org/open-data/', '_blank');
			}}
		>
			<p>Data sources</p>
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
			/>
		</Canvas>
	</div>
</section>

<section class="explore_wrapper" bind:this={exploreWrapper}>
	<Explore countriesData={data.data} />
	{#each data.data as country, index}
		<Card countryData={country} isSmall={false} {index} />
	{/each}
</section>

<style>
	:global(*) {
		font-family: 'Rethink Sans', sans-serif;
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		font-style: normal;
	}

	:global(html) {
		overflow-x: hidden;
		max-width: 100%;
	}

	:global(body) {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		position: relative;
		scroll-snap-type: y mandatory;
		scroll-behavior: smooth;
		scroll-timeline: --page-scroll block;
	}

	.hero_section {
		width: 100%;
		height: 100vh;
		max-height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		overflow: hidden;
		scroll-snap-align: start;
		scroll-snap-type: y mandatory;
	}

	@keyframes exploreButtonParallax {
		from {
			opacity: 1;
			transform: translateY(0);
		}
		to {
			opacity: 0;
			transform: translateY(-20px);
		}
	}

	:global(.planet-wrapper) {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		/* raise it above normal content so it can catch pointer events */
		z-index: 1; /* or any positive number */
		/* no pointer-events property here */
		pointer-events: none;
		transform: translateY(0);
		opacity: 0;
		transition: all 3.2s cubic-bezier(0.165, 0.84, 0.44, 1);
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
		/* make sure interaction is allowed */
		pointer-events: none; /* this is the default, can be omitted */
	}

	.explore_wrapper {
		width: 100%;
		height: 100vh;
		position: relative;
		z-index: 10;
		background-color: rgba(255, 255, 255, 0.1);
		scroll-snap-align: start;
		scroll-snap-type: y mandatory;
	}

	header {
		background: transparent;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 100;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 0px 20px;
		color: #fff;
		font-size: 1.2rem;
		font-weight: 600;
		height: 45px;
	}

	header > div {
		display: flex;
		flex-direction: row;
		column-gap: 20px;
	}

	:global(button) {
		all: unset;
		background: transparent;
		border: none;
		color: black;
		cursor: pointer;
		display: inline-block;
		font: inherit;
		line-height: normal;
		margin: 0;
		overflow: visible;
		padding: 0;
		text-align: center;
		text-decoration: none;
		text-transform: none;
		user-select: none;
		-webkit-user-select: none;
		vertical-align: middle;
		white-space: normal;
		width: auto;
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
	}

	.gd_barometer_logo {
		width: 100px;
		height: auto;
		z-index: 2;
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

	:global(h1) {
		font-size: 48px;
		line-height: auto;
		font-weight: 200;
		font-style: normal;
		text-transform: uppercase;
		line-height: 113.372%;
		letter-spacing: -1px;
		user-select: text;
		-webkit-user-select: text;
		-moz-user-select: text;
		-ms-user-select: text;
	}

	::selection {
		color: whitesmoke;
		background: black;
	}

	h1 > span {
		font-style: italic;
		text-decoration: underline;
		text-decoration-thickness: 4px;
		text-underline-offset: 4px;
		transition: all 0.3s ease-in-out;
	}

	:global(h2) {
		font-size: 24px;
		line-height: auto;
		font-weight: 200;
	}

	:global(h3) {
		font-size: 18px;
		line-height: auto;
		font-weight: 200;
	}

	:global(p) {
		font-size: 16px;
		line-height: auto;
		font-weight: 200;
	}

	.explore_button {
		position: fixed;
		bottom: 2%;
		left: 50%;
		transform: translate(-50%, 0%);
		z-index: 1000;
		background-color: rgba(255, 255, 255, 0);
		color: #fff;
		border: 0px solid #fff;
		padding: 10px 20px;
		border-radius: 20px;
		cursor: pointer;
		transition: all 0.3s ease-in-out;
		font-size: 16px;
		color: white;
		filter: blur(1px);
		transition: filter 0.3s ease-in-out;
		z-index: 2;
		animation: exploreButtonParallax linear;
		animation-timeline: --page-scroll;
		animation-range: 0% 50%;
	}

	.explore_button:hover {
		filter: blur(0px);
		transition:
			filter 0.3s ease-in-out,
			backdrop-filter 1.8s ease-in-out,
			background-color 1.8s ease-in-out,
			border 1.8s ease-in-out;
		transition-delay: 0.08s;
		background-color: rgba(142, 142, 142, 0.62);
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
