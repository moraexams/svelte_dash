<script>
	import { WEBSITE_TITLE } from '$lib/values';
</script>

<svelte:head>
	<title>Page not found | {WEBSITE_TITLE}</title>
</svelte:head>

<div class="h-screen flex flex-col items-center pt-20">
	<h1 class="text-center text-6xl font-bold">Page not found</h1>
	<p class="m-0 mt-3 max-w-prose text-lg">
		<a href="/" class="underline text-lg">Go to homepage</a>
	</p>
</div>
