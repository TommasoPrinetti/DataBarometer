<script>
	import { onMount } from 'svelte';
	import { Canvas, T } from '@threlte/core';
	import Planet from '$lib/components/planet.svelte';
	import Card from '$lib/components/card.svelte';
	import Explore from '$lib/components/explore.svelte';
	import { isPlanetReady } from '$lib/dataset/stores';
	/** @type {import('./$types').PageProps} */
	let { data } = $props();

	onMount(async () => {
		//console.log(await data.data);
	});
</script>

<header>
	<div>
		<button>
			<p>History</p>
		</button>
		<button>
			<p>Highlights</p>
		</button>
	</div>

	<div>
		<button>
			<p>Learn more ↗︎</p>
		</button>
		<button>
			<p>Global Data Barometer is independent</p>
		</button>
	</div>
</header>
<section class="hero_section">
	<div class="hero_title" class:out={$isPlanetReady}>
		<h1>
			Governments produce a <span>lot of data</span>,<br />but is it actually
			<span>open and available?</span>
		</h1>
	</div>

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

<section class="explore_wrapper">
	<Explore countriesData={data.data} />
</section>

{#each data.data as country}
	<Card countryData={country} isSmall={false} />
{/each}

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
	}

	.hero_section {
		width: 100%;
		height: 100vh;
		max-height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		overflow: hidden;
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
		z-index: 5;
		background-color: transparent;
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
		position: absolute;
		top: 10%;
		left: 50%;
		transform: translate(-50%, -100%);
		width: max-content;
		z-index: 2;
		transform-origin: center;
		clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0% 100%);
		transition:
			clip-path 1.2s cubic-bezier(0.165, 0.84, 0.44, 1),
			transform 1.2s cubic-bezier(0.165, 0.84, 0.44, 1);
	}

	:global(.hero_title.out) {
		clip-path: polygon(0 100%, 100% 100%, 100% 0, 0 0);
		transform: translate(-50%, 0);
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
	}

	:global(.hero_title.out > h1 > span) {
		clip-path: polygon(0 100%, 100% 100%, 100% 0, 0 0);
		transform: translateY(0);
		transition-delay: 10s;
		transition:
			clip-path 1.2s cubic-bezier(0.165, 0.84, 0.44, 1),
			transform 1.2s cubic-bezier(0.165, 0.84, 0.44, 1);
	}

	h1 {
		font-size: 48px;
		line-height: auto;
		font-weight: 200;
		font-style: normal;
		text-transform: uppercase;
		line-height: 113.372%;
		letter-spacing: -2.4px;
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
		transition: all 0.3s ease-in-out;
	}

	h1 > span:hover {
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
</style>
