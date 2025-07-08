import { writable, derived } from 'svelte/store';

export let isChartMode = writable(true);
export let isWorstMode = writable(false);
