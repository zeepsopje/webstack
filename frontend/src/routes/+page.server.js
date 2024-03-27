export async function load({ fetch }) {
	const data = await fetch('/api/pages')
		.then(res => res.json())
		.then(res => res);

	return {
		pages: data.docs
	}
}
