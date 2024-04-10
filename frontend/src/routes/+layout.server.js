export async function load({ fetch }) {
	const uri = '/api/globals';
	const data = await fetch(uri).then(res => res.json());

	return data;
}
