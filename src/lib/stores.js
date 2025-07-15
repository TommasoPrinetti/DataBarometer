import { writable, derived } from 'svelte/store';

export let isChartMode = writable(true);
export let isWorstMode = writable(false);
export let isCurrentCountry = writable('');
export let isPlanetReady = writable(false);

export const globalOverview = [
	{
		displayName: 'Country Overall',
		dataKey: 'Overall',
		maxValue: 66.85
	},
	{
		displayName: 'Effectiveness',
		dataKey: 'Law-vs-release gap',
		maxValue: 40.34
	},
	{
		displayName: 'Global ranking',
		dataKey: 'Regional rank',
		maxValue: 43
	}
];

export const threePillars = [
	{
		displayName: 'Governance',
		dataKey: 'Governance',
		maxValue: 68.32,
		worstValue: 19.94
	},
	{
		displayName: 'Availability',
		dataKey: 'Availability',
		maxValue: 66,
		worstValue: 6.67
	},
	{
		displayName: 'Capability',
		dataKey: 'Capability',
		maxValue: 76.55,
		worstValue: 23.98
	}
];

export const evaluationClusters = [
	{
		displayName: 'Company Info.',
		dataKey: 'Company Information',
		maxValue: 55.57,
		worstValue: 0
	},
	{
		displayName: 'Political Integrity',
		dataKey: 'Political Integrity',
		maxValue: 77.73,
		worstValue: 5.74
	},
	{
		displayName: 'Pub. Procurement',
		dataKey: 'Public Procurement',
		maxValue: 95.21,
		worstValue: 21.25
	},
	{
		displayName: 'Public Finance',
		dataKey: 'Public Finance',
		maxValue: 91.53,
		worstValue: 5
	},
	{
		displayName: 'Gov. Foundation',
		dataKey: 'Governance Foundation',
		maxValue: 84.11,
		worstValue: 12.89
	},
	{
		displayName: 'Equitable Access',
		dataKey: 'Equitable Access',
		maxValue: 90,
		worstValue: 0
	},
	{
		displayName: 'Critical Comp.',
		dataKey: 'Critical Competencies',
		maxValue: 84.69,
		worstValue: 0
	},
	{
		displayName: 'Land Manag.',
		dataKey: 'Land Management',
		maxValue: 60.6,
		worstValue: 0
	}
];
