<script>
	import { onMount } from 'svelte';
	import Planet from '$lib/components/planet.svelte';
	import Card from '$lib/components/card.svelte';

	/** @type {import('./$types').PageProps} */
	let { data } = $props();

	onMount(async () => {
		console.log(await data.data[0]);
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

	<button>
		<p>Learn more About GlobalDataBarometer</p>
	</button>
</header>

<div class="hero_title">
	<h1>
		Governments produce a <u><i>lot of data</i></u>,<br />but is it actually
		<u><i>open and available</i></u>
	</h1>
</div>

<div class="planet-container"></div>
<Card countryData={data.data[0]} />

<style>
	* {
		font-family: 'Rethink Sans', sans-serif;
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		overflow: hidden;
		font-style: normal;
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
	}

	header > button:nth-child(1) {
		display: flex;
		flex-direction: row;
		column-gap: 10px;
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
		top: 30%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: max-content;
	}

	h1 {
		font-size: 48px;
		line-height: auto;
		font-weight: 200;
		font-style: normal;
		text-transform: uppercase;
		line-height: 113.372%;
		letter-spacing: -2.4px;
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

	.planet-container {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		z-index: -1;
	}
</style>
