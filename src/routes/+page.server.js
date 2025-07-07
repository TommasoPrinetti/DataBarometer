import { readFile } from 'fs/promises';
import Papa from 'papaparse';

async function parseCSV() {
	const fileContent = await readFile('src/lib/dataset/Dataset.csv', 'utf8');
	const result = Papa.parse(fileContent, {
		header: true,
		skipEmptyLines: true,
		dynamicTyping: true
	});

	//console.log(result.data);

	return result.data;
}

export const load = async () => {
	return {
		data: await parseCSV()
	};
};
