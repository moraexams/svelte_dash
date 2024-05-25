// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
// export const prerender = true;

import { serverWithCustomFetch } from '$lib/api.js';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	return serverWithCustomFetch<{ total: number; checkedPercentage: string }>(fetch, '/stats');
};
