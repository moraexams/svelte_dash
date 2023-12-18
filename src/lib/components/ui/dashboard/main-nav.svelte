<script lang="ts">
	import { cn } from '$lib/utils';

	let className: string | undefined | null = undefined;
	export { className as class };
</script>

<nav class={cn('flex items-center space-x-4 lg:space-x-6', className)}>
	<a href="/" class="text-sm font-medium transition-colors hover:text-primary"> Overview </a>

	<a
		href="/applicants"
		class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
	>
		Applicants
	</a>
	<a
		href="/view"
		class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
	>
		Marks
	</a>
	<a
		href="/settings"
		class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
	>
		Settings
	</a>
	<a
		href="/auth"
		class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
	>
		Auth
	</a>
	<a
		href="/addstudent"
		class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
	>
		Add students
	</a>
</nav>
