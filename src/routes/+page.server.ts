import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url, route }) => {
	if (url.pathname === '/') {
		redirect(307, '/dashboard');
	}
};
