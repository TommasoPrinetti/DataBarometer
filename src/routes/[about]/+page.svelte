<script lang="ts">
	import Footer from '$lib/components/footer.svelte';
	import gdBarometerLogo from '$lib/assets/globaldatabarometer.png';
	let header: HTMLElement;
</script>

<header class="in" bind:this={header}>
	<div>
		<button>
			<img src={gdBarometerLogo} alt="GD Barometer logo" class="gd_barometer_logo" />
		</button>
	</div>

	<div>
		<button
			onclick={() => {
				window.location.href = '/';
				header.classList.remove('in');
			}}
		>
			<p>Return home</p>
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
	</div>
</header>

<div class="about_page">
	<h1>About this visualization<br /></h1>
	<h2>Dataset</h2>
	<p>
		This visualization takes its data from the <b>Global Data Barometer</b> works. The various
		produced datasets are assembled and distilled into a compact dataset, divided by country. This
		"distilled" dataset, can serve us to make some data-portraits for each nation. The "metric"
		system used, in fact, is <b>non-metric</b>. Each parameter is based on a
		<b>scale between the worst and the best</b>, using the exact data of the dataset. This
		de-mathematization of the data, allows the user to have a clear picture of how the country is
		doing in relation to the others, rather than on a sterile metric system that doesn't fully
		create a storytelling practice.
	</p>
	<h2>Reasons 🎯</h2>
	<p>
		My design focus, from the moment-zero, has been to make <b>accessible</b> the data present in
		the huge work done by GDB. In fact, the first thing I notice, was that the amount and complexity
		of data was kinda hard to grasp for non-experts. From this, the <b>questions marks</b>, present
		on almost all the "names" and "titles", serve the purpose of making the various data more
		explicit. At the same time, the initial visualization on the globe, is a way to gather the
		attention of the viewer, including it into the macro-context of the
		<b>global data governance system</b>.
	</p>
	<h2>The cards 📊</h2>
	<p>
		Lastly, the cards that can be generated from the dataset, for each country, are packed with all
		the information, with some additional ones to give more context about the country we are
		highlighting. The cards, <b>downloadable and animated</b>, want to be a touch point for the
		user, both to store and to share, to give visibility to the dataset-crafting work done by GDB
	</p>
	<h2>Images 🌍</h2>
	<p>
		The images used in the cards are topographic reliefs created by AI image generation. They're
		absolutely not accurate, but they give an idea of the country we're talking about.
	</p>
	<h2>Overall comments 💭</h2>
	<p>
		Lastly, the experience is <b>simple</b>, oriented to <b>desktop users</b>, and less
		"mathematical" than a rigorous plotting analysis.
	</p>
	<h2>Credits ✨</h2>
	<p>
		Thanks to the GBD for the data and the possibility to work on this project. Everything you need
		to know is findable on their website. I'm <b>Tommaso Prinetti</b>, research assistant at
		<b>SciencesPo Medialàb</b> and independent designer.
	</p>
</div>

<style>
	.about_page {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		height: 100%;
		width: 60%;
		padding: 20px;
		row-gap: 10px;
		margin-top: 50px;
	}

	:global(b) {
		font-weight: 600;
	}

	:global(body) {
		align-items: flex-start;
		justify-content: flex-start;
	}
</style>
