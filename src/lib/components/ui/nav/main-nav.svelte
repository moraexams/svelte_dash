<script lang="ts">
	import { cn } from '$lib/utils';
	import { page } from '$app/stores';

	export let items: { href: string; title: string }[];
	let className: string | undefined | null = undefined;
	export { className as class };
</script>

<nav class={cn('flex items-center space-x-4 lg:space-x-6', className)}>
	{#each items as item}
		<a
			href={item.href}
			class={cn(
				$page.url.pathname === item.href
					? 'text-sm font-medium transition-colors hover:text-primary'
					: 'text-sm font-medium transition-colors hover:text-primary',
				'text-sm font-medium transition-colors hover:text-primary'
			)}
		>
			{item.title}
		</a>
	{/each}

	<!-- <a
		href="/marks"
		class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
	>
		Marks
	</a>
	<a
		href="/students"
		class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
	>
		Students
	</a> -->
	<!-- <a
		href="/examples/dashboard"
		class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
	>
		Students
	</a> -->
</nav>
