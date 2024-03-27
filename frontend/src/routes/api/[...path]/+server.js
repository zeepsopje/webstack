import { API_KEY, BACKEND_URL } from '$env/static/private';

export function GET({ fetch, params, url }) {
	return fetch(`${BACKEND_URL}/api/${params.path + url.search}`, {
		headers: {
			'Authorization': `users API-Key ${API_KEY}`,
		}
	});
}
