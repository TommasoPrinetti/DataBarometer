import Papa from 'papaparse';

import earthMap from '$lib/assets/8k.jpg?url';
import normalMap from '$lib/assets/8k_normal_opt.jpg?url';
import specularMap from '$lib/assets/8k_specular.webp?url';
import csv from '$lib/assets/dataset.csv?raw';

import angola from '$lib/assets/COUNTRYMAPS/angola.jpg?enhanced';
import argentina from '$lib/assets/COUNTRYMAPS/argentina.jpg?enhanced';
import bahamas from '$lib/assets/COUNTRYMAPS/bahamas.jpg?enhanced';
import barbados from '$lib/assets/COUNTRYMAPS/barbados.jpg?enhanced';
import belize from '$lib/assets/COUNTRYMAPS/belize.jpg?enhanced';
import benin from '$lib/assets/COUNTRYMAPS/benin.jpg?enhanced';
import bolivia from '$lib/assets/COUNTRYMAPS/bolivia.jpg?enhanced';
import botswana from '$lib/assets/COUNTRYMAPS/botswana.jpg?enhanced';
import brazil from '$lib/assets/COUNTRYMAPS/brazil.jpg?enhanced';
import burkinaFaso from '$lib/assets/COUNTRYMAPS/Burkina Faso.jpg?enhanced';
import cameroon from '$lib/assets/COUNTRYMAPS/cameroon.jpg?enhanced';
import chile from '$lib/assets/COUNTRYMAPS/chile.jpg?enhanced';
import colombia from '$lib/assets/COUNTRYMAPS/colombia.jpg?enhanced';
import costaRica from '$lib/assets/COUNTRYMAPS/Costa Rica.jpg?enhanced';
import coteDIvoire from '$lib/assets/COUNTRYMAPS/Cote_D_Ivoire.jpg?enhanced';
import dominicanRepublic from '$lib/assets/COUNTRYMAPS/Dominican Republic.jpg?enhanced';
import ecuador from '$lib/assets/COUNTRYMAPS/ecuador.jpg?enhanced';
import elSalvador from '$lib/assets/COUNTRYMAPS/El Salvador.jpg?enhanced';
import gambia from '$lib/assets/COUNTRYMAPS/gambia.jpg?enhanced';
import ghana from '$lib/assets/COUNTRYMAPS/ghana.jpg?enhanced';
import guatemala from '$lib/assets/COUNTRYMAPS/guatemala.jpg?enhanced';
import honduras from '$lib/assets/COUNTRYMAPS/honduras.jpg?enhanced';
import jamaica from '$lib/assets/COUNTRYMAPS/jamaica.jpg?enhanced';
import kenya from '$lib/assets/COUNTRYMAPS/kenya.jpg?enhanced';
import liberia from '$lib/assets/COUNTRYMAPS/liberia.jpg?enhanced';
import mexico from '$lib/assets/COUNTRYMAPS/mexico.jpg?enhanced';
import morocco from '$lib/assets/COUNTRYMAPS/morocco.jpg?enhanced';
import mozambique from '$lib/assets/COUNTRYMAPS/mozambique.jpg?enhanced';
import namibia from '$lib/assets/COUNTRYMAPS/namibia.jpg?enhanced';
import nigeria from '$lib/assets/COUNTRYMAPS/nigeria.jpg?enhanced';
import panama from '$lib/assets/COUNTRYMAPS/panama.jpg?enhanced';
import paraguay from '$lib/assets/COUNTRYMAPS/paraguay.jpg?enhanced';
import peru from '$lib/assets/COUNTRYMAPS/peru.jpg?enhanced';
import rwanda from '$lib/assets/COUNTRYMAPS/rwanda.jpg?enhanced';
import senegal from '$lib/assets/COUNTRYMAPS/senegal.jpg?enhanced';
import sierraLeone from '$lib/assets/COUNTRYMAPS/Sierra Leone.jpg?enhanced';
import southAfrica from '$lib/assets/COUNTRYMAPS/South Africa.jpg?enhanced';
import togo from '$lib/assets/COUNTRYMAPS/togo.jpg?enhanced';
import trinidadAndTobago from '$lib/assets/COUNTRYMAPS/Trinidad and Tobago.jpg?enhanced';
import tunisia from '$lib/assets/COUNTRYMAPS/tunisia.jpg?enhanced';
import uganda from '$lib/assets/COUNTRYMAPS/uganda.jpg?enhanced';
import uruguay from '$lib/assets/COUNTRYMAPS/uruguay.jpg?enhanced';
import malawi from '$lib/assets/COUNTRYMAPS/malawi.jpg?enhanced';

const countryImages = {
	angola,
	argentina,
	bahamas,
	barbados,
	belize,
	benin,
	bolivia,
	botswana,
	brazil,
	burkinaFaso,
	cameroon,
	chile,
	colombia,
	costaRica,
	coteDIvoire,
	dominicanRepublic,
	ecuador,
	elSalvador,
	gambia,
	ghana,
	guatemala,
	honduras,
	jamaica,
	kenya,
	liberia,
	mexico,
	morocco,
	mozambique,
	namibia,
	nigeria,
	panama,
	paraguay,
	peru,
	rwanda,
	senegal,
	sierraLeone,
	southAfrica,
	togo,
	trinidadAndTobago,
	tunisia,
	uganda,
	uruguay,
	malawi
};

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

function parseCSV() {
	const result = Papa.parse(csv, {
		header: true,
		skipEmptyLines: true,
		dynamicTyping: true
	});

	return result.data;
}

export const load = async () => {
	return {
		data: parseCSV(),
		earthMap,
		normalMap,
		specularMap,
		coordinates,
		countryImages
	};
};
