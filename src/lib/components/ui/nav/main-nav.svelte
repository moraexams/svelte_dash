<script lang="ts">
	import { cn } from '$lib/utils';
	import { page } from '$app/stores';

	export let items: { href: string; title: string }[];
	const className: string | undefined | null = undefined;
	export { className as class };
</script>

<nav class={cn('flex items-center space-x-4 lg:space-x-3', className)}>
	{#each items as item}
		<a
			href={item.href}
			class={cn(
				'text-sm font-medium transition-colors hover:underline hover:underline-offset-2 opacity-90',
				$page.url.pathname === item.href ? 'font-bold underline underline-offset-2' : undefined
			)}
		>
			{item.title}
		</a>
	{/each}
</nav>
