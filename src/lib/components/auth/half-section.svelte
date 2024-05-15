<script>
	// Used on login and sign-up pages
	import { WEBSITE_TITLE } from '$lib/values';
</script>

<div class="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
	<div
		class="absolute inset-0 bg-cover"
		style="
				background-image: url('/login-page-image.avif');
			"
	/>
	<div class="relative z-20 flex items-center text-lg font-medium">{WEBSITE_TITLE}</div>
</div>
