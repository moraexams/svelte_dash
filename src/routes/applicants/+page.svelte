<script lang="ts">
	import { Activity, CreditCard, DollarSign, Download, Users } from 'lucide-svelte';
	import { Button } from '$lib/components/ui/button';
	import { DarkToggler } from '$lib/components/ui/special-btns';
	import * as Card from '$lib/components/ui/card';
	import * as Tabs from '$lib/components/ui/tabs';
	import {
		DashboardMainNav,
		Overview,
		RecentSales,
		Search,
		UserNav,
		TeamSwitcher
	} from '../../lib/components/ui/dashboard';

	import * as Table from '$lib/components/ui/table';
	import { db } from '$lib/db';
	import * as schema from '$lib/db/shema';
	import { get_table } from '$lib/utils';
	import SearchBar from '../../lib/components/ui/dashboard/search.svelte';
	import SC from '../../lib/components/ui/dashboard/user-nav.svelte';

	let offset = 0;

	function incrementOffset() {
		offset += 50;
	}
	function decrementOffset() {
		if (offset < 50) {
			offset = 0;
		} else {
			offset -= 50;
		}
	}
	let limit = 50;
	function limitset25() {
		limit = 25;
	}
	function limitset50() {
		limit = 50;
	}
	function limitset100() {
		limit = 100;
	}
</script>

<div class="md:hidden">
	<img
		src="/examples/dashboard-light.png"
		width={1280}
		height={866}
		alt="Dashboard"
		class="block dark:hidden"
	/>
	<img
		src="/examples/dashboard-dark.png"
		width={1280}
		height={866}
		alt="Dashboard"
		class="hidden dark:block"
	/>
</div>
<div class="border-b">
	<div class="flex h-16 items-center px-4">
		<DashboardMainNav class="mx-6" />
		<div class="ml-auto flex items-center space-x-4">
			<DarkToggler />

			<UserNav />
		</div>
	</div>
</div>
<div class="hidden flex-col md:flex">
	<div class="flex-1 space-y-4 p-8 pt-6">
		<div class="flex items-center justify-between space-y-2">
			<h2 class="text-3xl font-bold tracking-tight">Applicants</h2>
			<div class="flex items-center space-x-2"></div>
		</div>
	</div>
</div>
<Tabs.Root value="overview" class="ml-10 space-y-4">
	<Tabs.List>
		<Tabs.Trigger value="overview">Overview</Tabs.Trigger>
		<Tabs.Trigger value="View">View</Tabs.Trigger>
		<Tabs.Trigger value="manage">Manage</Tabs.Trigger>
	</Tabs.List>
</Tabs.Root>
