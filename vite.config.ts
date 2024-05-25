import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	server: {
		host: '127.0.0.1'
	},
	plugins: [sveltekit()],
	define: {
		__SERVER_URL__: "'http://localhost:3000'"
	},
	build: {
		target: 'esnext'
	}
});
