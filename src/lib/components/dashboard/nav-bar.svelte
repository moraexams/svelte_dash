<script>
	import UserNav from './user-nav.svelte';
	import MainNav from '../ui/nav/main-nav.svelte';
	import { DarkToggler } from '../ui/special-btns';
	import { WEBSITE_TITLE } from '$lib/values';
</script>

<div class="border-b">
	<div class="flex h-16 items-center px-4">
		<a href="/" class="mr-8 font-bold">
			{WEBSITE_TITLE}
		</a>
		<!-- <TeamSwitcher /> -->
		<MainNav
			items={[
				{
					href: '/marks',
					title: 'Marks'
				},
				{
					href: '/dashboard/students/',
					title: 'Students'
				},
				{
					href: '/example/dashboard',
					title: 'Example Dashboard'
				}
			]}
		/>
		<div class="ml-auto flex items-center space-x-4">
			<DarkToggler />
			<UserNav />
		</div>
	</div>
</div>
