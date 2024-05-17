<script>
	import NavBar from '$lib/components/dashboard/nav-bar.svelte';
import '../../app.pcss';
	import { ModeWatcher } from 'mode-watcher';
</script>

<ModeWatcher />
<NavBar />
<main>
	<slot />
</main>
