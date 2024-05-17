<script>
	import NavBar from '$lib/components/dashboard/nav-bar.svelte';
	import '../../app.pcss';
	import { ModeWatcher } from 'mode-watcher';
</script>

<ModeWatcher />
<NavBar />
<main class="flex-1 space-y-4 p-8 pt-6">
	<slot />
</main>
