<script>
	import gdBarometerLogo from '$lib/assets/Globaldata.png';
	import QuestionMark from '$lib/components/question_mark.svelte';
	import terrainTest from '$lib/assets/terrain_test.png';
	export let countryData;
</script>

<div class="card_container">
	<div class="card_columns">
		<img src={terrainTest} alt="Tunisia" class="terrain_image" />
	</div>

	<div class="card_columns">
		<div>
			<div class="data_header">
				<div>
					<h2>{countryData.CountryName}</h2>
					<p>Africa</p>
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
						<div class="number_container">
							<h3>Country overall<QuestionMark /></h3>

							<p>{countryData.Overall}<span>/66.42</span></p>
						</div>
						<div class="number_container">
							<h3>Effectiveness<QuestionMark /></h3>
							<p>{countryData['Law-vs-release gap']}<span>/40.34</span></p>
						</div>
						<div class="number_container">
							<h3>Global ranking<QuestionMark /></h3>
							<p>{countryData['Regional rank']}<span>/43</span></p>
						</div>
					</div>
				</div>
				<div>
					<p class="data_title">Three main pillars</p>
					<div class="data_triple_grid">
						<div class="number_container">
							<h3>Governance<QuestionMark /></h3>
							<p>{countryData.Governance}<span>/60.36</span></p>
						</div>
						<div class="number_container">
							<h3>Availability<QuestionMark /></h3>
							<p>{countryData.Availability}<span>/66</span></p>
						</div>
						<div class="number_container">
							<h3>Capability<QuestionMark /></h3>
							<p>{countryData.Capability}<span>/70.34</span></p>
						</div>
					</div>
				</div>
				<div>
					<p class="data_title">Eight evaluation clusters</p>
					<div class="data_triple_grid">
						<div class="number_container">
							<h3>Company Info.<QuestionMark /></h3>
							<p>{countryData['Company Information']}<span>/55.57</span></p>
						</div>
						<div class="number_container">
							<h3>Political Integrity<QuestionMark /></h3>
							<p>{countryData['Political Integrity']}<span>/77.73</span></p>
						</div>
						<div class="number_container">
							<h3>Pub. Procurement<QuestionMark /></h3>
							<p>{countryData['Public Procurement']}<span>/95.21</span></p>
						</div>
						<div class="number_container">
							<h3>Public Finance<QuestionMark /></h3>
							<p>{countryData['Public Finance']}<span>/91.53</span></p>
						</div>
						<div class="number_container">
							<h3>Gov. Foundation<QuestionMark /></h3>
							<p>{countryData['Governance Foundation']}<span>/84.11</span></p>
						</div>
						<div class="number_container">
							<h3>Equitable Access<QuestionMark /></h3>
							<p>{countryData['Equitable Access']}<span>/90</span></p>
						</div>
						<div class="number_container">
							<h3>Critical Comp.<QuestionMark /></h3>
							<p>{countryData['Critical Competencies']}<span>/84.69</span></p>
						</div>
						<div class="number_container">
							<h3>Land Manag.<QuestionMark /></h3>
							<p>{countryData['Land Management']}<span>/60.6</span></p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<img src={gdBarometerLogo} alt="GD Barometer logo" class="gd_barometer_logo" />
	</div>

	<button class="side_button" aria-label="Close">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"
			><path
				d="M256-192.35 192.35-256l224-224-224-224L256-767.65l224 224 224-224L767.65-704l-224 224 224 224L704-192.35l-224-224-224 224Z"
			/></svg
		>
	</button>

	<button class="side_button" aria-label="Refresh">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"
			><path
				d="M481.52-154.26q-135.43 0-231.23-94.2-95.79-94.19-95.79-228.91v-7.24L94.09-424.2 35.7-482.83 200-647.37l164.3 164.54-58.39 58.63-60.41-60.41v6.52q0 96.89 68.83 164.86 68.82 67.97 167.19 67.97 26.72 0 52.32-6.36 25.59-6.36 50.07-19.08l67.42 67.18q-39.68 24.39-82.31 36.82-42.63 12.44-87.5 12.44Zm278.72-158.13L595.7-476.7l58.63-58.63 60.41 60.42v-6.52q0-96.9-68.95-164.86-68.94-67.97-167.31-67.97-26.72 0-52.32 6.36-25.59 6.36-50.07 19.07l-67.18-67.41q39.68-24.39 82.19-36.71 42.51-12.31 87.38-12.31 135.43 0 231.35 94.19 95.91 94.2 95.91 228.92v7.24l60.17-60.42 58.63 58.63-164.3 164.31Z"
			/></svg
		>
	</button>
</div>

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
		background-color: rgb(52, 52, 52);
	}

	.side_button:nth-of-type(2):hover {
		background-color: rgb(62, 62, 62);
		transform: translateY(110%) scale(1) rotate(180deg);
		transition: transform 0.8s ease-in-out filter 0.1s ease-in-out;
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

	.download_button:active {
		fill: #8e8e8e;
		transform: scale(0.95);
		transition: transform 0.1s ease-in-out;
	}

	.card_container {
		position: fixed;
		bottom: 50%;
		left: 50%;
		transform: translate(-50%, 50%);
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
		width: 52%;
	}

	.card_columns:nth-of-type(2) > div {
		display: flex;
		flex-direction: column;
		row-gap: 35px;
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
		height: fit-content;
		padding-top: 2px;
		padding-bottom: 2px;
		row-gap: 0px;
		display: flex;
		flex-direction: column;
	}

	.number_container > h3 {
		font-size: 20px;
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
</style>
