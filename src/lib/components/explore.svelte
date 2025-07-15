<script lang="js">
	import { isCurrentCountry, isPlanetReady } from '$lib/stores.js';
	import { fade } from 'svelte/transition';
	import Footer from '$lib/components/footer.svelte';

	export let countriesData;
</script>

{#if $isPlanetReady}
	<div
		class="explore_bar"
		class:minimized={$isCurrentCountry}
		in:fade={{ duration: 1000, delay: 1000, easing: (t) => t * t }}
		out:fade={{ duration: 1000, delay: 1000, easing: (t) => t * t }}
	>
		<label for="country-select">
			<h1 class="explore_title" id="mobile_show">
				The experience is not yet implemented for mobile devices. Please, consider returning to a
				<b>desktop</b> one 🖥️
			</h1>
			<h1 class="explore_title" id="desktop_show">
				how's the <i>data</i> situation in
			</h1>
		</label>

		<select id="country-select" class="selector" bind:value={$isCurrentCountry}>
			{#each countriesData as countryData}
				<option class="country_option" value={countryData.CountryName}>
					{countryData.Flag}
					{countryData.CountryName}
				</option>
			{/each}
		</select>
		<label for="country-select" id="question">
			<h1 class="explore_title">?</h1>
		</label>
	</div>

	<Footer />
{/if}

<style>
	.explore_bar {
		width: fit-content;
		height: fit-content;
		display: flex;
		flex-direction: row;
		column-gap: 10px;
		border: 1px solid black;
		border-radius: 20px;
		padding: 10px;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		align-items: center;
		background-color: white;
		transition: all 1.8s cubic-bezier(0.94, -0.01, 0.56, 0.99);
		will-change: transform, top, left, padding;
	}

	.explore_title {
		font-size: 34px;
		font-weight: 400;
		font-family: 'Rethink Sans', sans-serif;
		color: #000000;
		text-transform: uppercase;
		white-space: nowrap;
		transition: font-size 0.65s cubic-bezier(0.94, -0.01, 0.56, 0.99) 1.45s;
		will-change: font-size;
	}

	.explore_bar.minimized {
		top: 8%;
		transform: translate(-50%, 0%);
		padding: 7px 20px 7px 20px;
		transition: all 1.5s cubic-bezier(0.94, -0.01, 0.56, 0.99) 0.45s;
	}

	.explore_bar.minimized > label > .explore_title {
		font-size: 20px;
		transition: font-size 0.65s cubic-bezier(0.94, -0.01, 0.56, 0.99);
	}

	.country_option {
		font-size: 16px !important;
		font-weight: 400;
		font-family: 'Rethink Sans', sans-serif;
		color: #000000;
		white-space: nowrap;
	}

	.selector {
		appearance: none;
		background-color: #e7e7e7;
		border-radius: 10px;
		padding: 10px 40px 10px 10px;
		font-size: 20px;
		color: #000000;
		text-transform: uppercase;
		cursor: pointer;
		border: none;
		outline: none;
		min-width: 120px;
		width: auto;
		max-width: 200px;
		position: relative;
		background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23000000%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E');
		background-repeat: no-repeat;
		background-position: right 10px center;
		background-size: 12px auto;
		transition: all 1s ease-in-out;
		transition-delay: 0.5s;
	}

	:global(.explore_bar.minimized .selector) {
		color: #000000;
		background-color: #e7e7e7;
		border: 1px solid #000000;
		transition: all 0.2s ease-in-out;
		font-size: 18px;
		transition: all 0.65s cubic-bezier(0.94, -0.01, 0.56, 0.99);
		transition-delay: 0.25s;
	}

	.selector:hover {
		background-color: #d7d7d7;
		border: 1px solid #000000;
		transition: border 0.2s ease-in-out background-color 0.2s ease-in-out;
	}

	:global(::picker(select)) {
		background: white;
		border: 1px solid #ccc;
		border-radius: 10px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		padding: 8px;
		opacity: 0;
		transition: all 0.4s allow-discrete;
		top: calc(anchor(bottom) + 1px);
		left: anchor(0%);
		max-height: 400px;
		overflow-y: auto;
	}

	:global(::picker(select):popover-open) {
		opacity: 1;
	}

	@starting-style {
		:global(::picker(select):popover-open) {
			opacity: 0;
		}
	}

	:global(option) {
		display: flex;
		align-items: center;
		gap: 8px;
		padding: 8px;
		cursor: pointer;
		transition: background-color 0.2s;
	}

	:global(::picker-icon) {
		content: '▼';
		margin-left: 8px;
		transition: transform 0.2s;
	}

	@media (max-width: 768px) {
		.explore_bar {
			padding: 10px 15px 10px 15px;
			flex-direction: column;
			row-gap: 10px;
			width: 35ch;
		}

		.explore_title {
			font-size: 16px;
			font-weight: 400;
			font-family: 'Rethink Sans', sans-serif;
			color: #000000;
			text-transform: uppercase;
			white-space: normal;
			transition: font-size 0.65s cubic-bezier(0.94, -0.01, 0.56, 0.99) 1.45s;
			will-change: font-size;
		}

		.explore_bar.minimized {
			top: 8%;
			transform: translate(-50%, 0%);
			padding: 7px 10px 7px 10px;
			transition: all 1.5s cubic-bezier(0.94, -0.01, 0.56, 0.99) 0.45s;
		}

		.explore_bar.minimized > label > .explore_title {
			font-size: 20px;
			transition: font-size 0.65s cubic-bezier(0.94, -0.01, 0.56, 0.99);
		}

		.selector {
			display: none;
		}

		#question {
			display: none;
		}
	}
</style>
