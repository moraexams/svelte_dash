<script lang="ts">
	import { Separator } from '$lib/components/ui/separator';
	import SidebarNav from '../../lib/components/ui/nav/sidebar-nav.svelte';

	const sidebarNavItems = [
		{
			title: 'Profile',
			href: '/forms'
		},
		{
			title: 'Account',
			href: '/forms/account'
		},
		{
			title: 'Appearance',
			href: '/forms/appearance'
		},
		{
			title: 'Notifications',
			href: '/forms/notifications'
		}
	];
</script>

<div class="md:hidden">
	<img src="/forms-light.png" width={1280} height={791} alt="Forms" class="block dark:hidden" />
	<img src="/forms-dark.png" width={1280} height={791} alt="Forms" class="hidden dark:block" />
</div>
<div class="hidden space-y-6 p-10 pb-16 md:block">
	<div class="space-y-0.5">
		<h2 class="text-2xl font-bold tracking-tight">Settings</h2>
		<p class="text-muted-foreground">Manage your account settings and set e-mail preferences.</p>
	</div>
	<Separator class="my-6" />
	<div class="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
		<aside class="-mx-4 lg:w-1/5">
			<SidebarNav items={sidebarNavItems} />
		</aside>
		<div class="flex-1 lg:max-w-2xl">
			<slot />
		</div>
	</div>
</div>
