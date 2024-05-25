export function server<T = unknown>(endpoint: string, config: RequestInit = {}): Promise<T> {
	config.headers = new Headers(config.headers);

	return fetch(__SERVER_URL__.concat(endpoint), config).then(async (response) => {
		if (!response.ok) {
			const errorMessage = await response.text();
			return Promise.reject(new Error(errorMessage));
		}

		const type = response.headers.get('Content-Type');

		if (type?.includes('application/json')) {
			return response.json();
		}

		return response.text();
	});
}

export function serverWithCustomFetch<T = unknown>(
	_fetch: typeof window.fetch,
	endpoint: string,
	config: RequestInit = {}
): Promise<T> {
	config.headers = new Headers(config.headers);

	return _fetch(__SERVER_URL__.concat(endpoint), config).then(async (response) => {
		if (!response.ok) {
			const errorMessage = await response.text();
			return Promise.reject(new Error(errorMessage));
		}
		return response.json();
	});
}
