<script lang="ts">
	export let type: string;

	let explanation: string;

	if (type === 'Governance') {
		explanation = 'Strength of data laws, policies, and watchdog institutions.';
	} else if (type === 'Availability') {
		explanation = 'How much of the key public-sector data is online, free, and machine-readable.';
	} else if (type === 'Capability') {
		explanation =
			'People, skills, funding, and tech that let government and society use data well.';
	} else if (type === 'Company Info.') {
		explanation = 'Openness of company registers and real-owner (beneficial-ownership) data.';
	} else if (type === 'Political Integrity') {
		explanation =
			'Transparency of party finance, lobbying, asset declarations, and RTI performance.';
	} else if (type === 'Pub. Procurement') {
		explanation = 'Who wins government contracts, for how much, and how projects progress.';
	} else if (type === 'Public Finance') {
		explanation = 'Visibility of budgets, revenues, and spending from proposal to execution.';
	} else if (type === 'Gov. Foundation') {
		explanation = 'Core data rules: privacy, data-sharing frameworks, open-data policy, standards.';
	} else if (type === 'Equitable Access') {
		explanation =
			'Whether data and digital services reach everyone—languages, disabilities, connectivity.';
	} else if (type === 'Critical Comp.') {
		explanation = 'Training, infrastructure, and support that build data and digital skills.';
	} else if (type === 'Land Manag.') {
		explanation = 'Maps and records of land use, tenure, and related environmental data.';
	} else if (type === 'Population') {
		explanation = 'Total number of inhabitants in the country.';
	} else if (type === 'Gov. form') {
		explanation =
			'Type of political system (e.g., presidential republic, constitutional monarchy).';
	} else if (type === 'GDP') {
		explanation = 'Gross Domestic Product—overall size of the national economy.';
	} else if (type === 'Country overall') {
		explanation = 'Overall score';
	} else if (type === 'Effectiveness') {
		explanation = 'How effective the country is at using data.';
	} else if (type === 'Global ranking') {
		explanation = 'Position in the global ranking.';
	} else {
		explanation = 'Fallback explanation';
	}
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 -960 960 960"
	onclick={() => {
		console.log(type);
	}}
	><path
		d="M477.28-240q21.96 0 37.3-15.34 15.33-15.33 15.33-37.32 0-21.99-15.33-37.18-15.34-15.18-37.3-15.18-21.95 0-37.29 15.18-15.34 15.19-15.34 37.18 0 21.99 15.34 37.32Q455.33-240 477.28-240Zm-38.63-154h78.78q0-32.04 7.62-51.28 7.62-19.24 41.43-51.29 25.28-25.04 40.16-48.91 14.88-23.87 14.88-57.39 0-56.89-40.52-87.25t-96.52-30.36q-57.96 0-94.65 31.2-36.7 31.19-51.18 74.63l71.26 27.67q5.48-18.48 22.38-39.24 16.91-20.76 50.99-20.76 29.13 0 43.94 16.31 14.8 16.3 14.8 35.87 0 18.8-11.64 35.94-11.64 17.14-27.97 30.71-43.04 38.52-53.4 59.36-10.36 20.83-10.36 74.79ZM480-71.87q-84.91 0-159.34-32.12-74.44-32.12-129.5-87.17-55.05-55.06-87.17-129.5Q71.87-395.09 71.87-480t32.12-159.34q32.12-74.44 87.17-129.5 55.06-55.05 129.5-87.17 74.43-32.12 159.34-32.12t159.34 32.12q74.44 32.12 129.5 87.17 55.05 55.06 87.17 129.5 32.12 74.43 32.12 159.34t-32.12 159.34q-32.12 74.44-87.17 129.5-55.06 55.05-129.5 87.17Q564.91-71.87 480-71.87Zm0-91q133.04 0 225.09-92.04 92.04-92.05 92.04-225.09 0-133.04-92.04-225.09-92.05-92.04-225.09-92.04-133.04 0-225.09 92.04-92.04 92.05-92.04 225.09 0 133.04 92.04 225.09 92.05 92.04 225.09 92.04ZM480-480Z"
	/>
</svg>

<div class="explanation_container">
	<p class="explanation_text">{explanation}</p>
</div>

<style>
	svg {
		width: 15px;
		height: 15px;
		fill: #dbdbdb;
		position: relative;
		cursor: pointer;
		transform: translateY(-60%);
		mix-blend-mode: difference;
		z-index: 10;
		overflow: visible;
	}

	svg:hover {
		fill: #8e8e8e;
		transition: fill 0.1s ease-in-out;
	}

	svg:hover ~ .explanation_container {
		opacity: 1;
		visibility: visible;
		transition:
			opacity 0.2s ease-in-out,
			visibility 0.2s ease-in-out;
	}

	svg:active {
		fill: #6e6e6e;
		transition: fill 0.1s ease-in-out;
	}

	.explanation_text {
		font-size: 16px;
	}

	.explanation_container {
		position: absolute;
		background-color: white;
		display: flex;
		height: fit-content;
		opacity: 0;
		visibility: hidden;
		user-select: none;
		pointer-events: none;
		transition:
			opacity 0.2s ease-in-out,
			visibility 0.2s ease-in-out;
		width: max-content;
		height: fit-content;
		text-align: center;

		border-radius: 8px;
		padding: 8px 12px;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
		border: 1px solid #e0e0e0;
		z-index: 1000;
		top: 100%;
		left: 50%;
		transform: translateX(-50%) translateY(5px);
	}

	.explanation_container::before {
		content: '';
		position: absolute;
		top: -5px;
		left: 50%;
		transform: translateX(-50%);
		width: 0;
		height: 0;
		border-left: 5px solid transparent;
		border-right: 5px solid transparent;
		border-bottom: 5px solid white;
	}

	p {
		padding: 0;
		margin: 0;
		font-size: 10px;
		color: #333;
		line-height: 1.4;
		white-space: pre-wrap;
		max-width: 40ch;
	}
</style>
