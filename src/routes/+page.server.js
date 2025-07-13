import { readFile } from 'fs/promises';
import Papa from 'papaparse';

import earthMap from '$lib/assets/8k.webp?url';
import normalMap from '$lib/assets/8k_normal.webp?url';
import specularMap from '$lib/assets/8k_specular.webp?url';

let coordinates = [
	{ territoryName: 'Angola', lat: -12.0, lon: 17.5 },
	{ territoryName: 'Argentina', lat: -34.0, lon: -64.0 },
	{ territoryName: 'Bahamas', lat: 25.0, lon: -77.4 },
	{ territoryName: 'Barbados', lat: 13.2, lon: -59.5 },
	{ territoryName: 'Belize', lat: 17.2, lon: -88.5 },
	{ territoryName: 'Benin', lat: 9.5, lon: 2.4 },
	{ territoryName: 'Bolivia', lat: -16.3, lon: -63.6 },
	{ territoryName: 'Botswana', lat: -22.3, lon: 24.7 },
	{ territoryName: 'Brazil', lat: -14.2, lon: -51.9 },
	{ territoryName: 'Burkina Faso', lat: 12.2, lon: -1.6 },
	{ territoryName: 'Cameroon', lat: 7.0, lon: 12.0 },
	{ territoryName: 'Chile', lat: -35.7, lon: -71.5 },
	{ territoryName: 'Colombia', lat: 4.6, lon: -74.3 },
	{ territoryName: 'Costa Rica', lat: 9.7, lon: -83.8 },
	{ territoryName: 'Cote_D_Ivoire', lat: 7.5, lon: -5.5 },
	{ territoryName: 'Dominican Republic', lat: 18.7, lon: -70.2 },
	{ territoryName: 'Ecuador', lat: -1.8, lon: -78.2 },
	{ territoryName: 'El Salvador', lat: 13.8, lon: -88.9 },
	{ territoryName: 'Gambia', lat: 13.4, lon: -15.3 },
	{ territoryName: 'Ghana', lat: 7.9, lon: -1.0 },
	{ territoryName: 'Guatemala', lat: 15.8, lon: -90.2 },
	{ territoryName: 'Honduras', lat: 15.2, lon: -86.2 },
	{ territoryName: 'Jamaica', lat: 18.1, lon: -77.3 },
	{ territoryName: 'Kenya', lat: 0.0, lon: 37.9 },
	{ territoryName: 'Liberia', lat: 6.4, lon: -9.4 },
	{ territoryName: 'Malawi', lat: -13.3, lon: 34.3 },
	{ territoryName: 'Mexico', lat: 23.6, lon: -102.6 },
	{ territoryName: 'Morocco', lat: 31.8, lon: -7.1 },
	{ territoryName: 'Mozambique', lat: -18.7, lon: 35.5 },
	{ territoryName: 'Namibia', lat: -22.9, lon: 18.5 },
	{ territoryName: 'Nigeria', lat: 9.1, lon: 8.7 },
	{ territoryName: 'Panama', lat: 8.5, lon: -80.8 },
	{ territoryName: 'Paraguay', lat: -23.4, lon: -58.4 },
	{ territoryName: 'Peru', lat: -9.2, lon: -75.0 },
	{ territoryName: 'Rwanda', lat: -1.9, lon: 29.9 },
	{ territoryName: 'Senegal', lat: 14.5, lon: -14.5 },
	{ territoryName: 'Sierra Leone', lat: 8.5, lon: -11.8 },
	{ territoryName: 'South Africa', lat: -30.6, lon: 22.9 },
	{ territoryName: 'Togo', lat: 8.6, lon: 0.8 },
	{ territoryName: 'Trinidad and Tobago', lat: 10.7, lon: -61.2 },
	{ territoryName: 'Tunisia', lat: 33.9, lon: 9.5 },
	{ territoryName: 'Uganda', lat: 1.4, lon: 32.3 },
	{ territoryName: 'Uruguay', lat: -32.5, lon: -55.8 }
];

async function parseCSV() {
	const fileContent = await readFile('static/dataset/Dataset.csv', 'utf8');
	const result = Papa.parse(fileContent, {
		header: true,
		skipEmptyLines: true,
		dynamicTyping: true
	});

	return result.data;
}

export const load = async () => {
	return {
		data: await parseCSV(),
		earthMap,
		normalMap,
		specularMap,
		coordinates
	};
};
