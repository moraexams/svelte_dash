<script lang="ts">
	import { Activity, CreditCard, DollarSign, Download, Users } from 'lucide-svelte';
	import { Button } from '$lib/components/ui/button';
	import { DarkToggler } from '$lib/components/ui/special-btns';
	import * as Card from '$lib/components/ui/card';
	import * as Tabs from '$lib/components/ui/tabs';
	import { MarkTable } from '$lib/components/tables';
	import {
		DashboardMainNav,
		Overview,
		RecentSales,
		Search,
		UserNav,
		TeamSwitcher,
		DashOverview
	} from '.';
	import DatePickerWithRange from './date-picker-with-range.svelte';
</script>

<div class="hidden flex-col md:flex">
	<div class="border-b">
		<div class="flex h-16 items-center px-4">
			<!-- <TeamSwitcher /> -->
			<DashboardMainNav
				class="mx-6"
				items={[
					{
						href: '/marks',
						title: 'Marks'
					},
					{
						href: '/students',
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
				<!-- <Search /> -->
				<UserNav />
			</div>
		</div>
	</div>
	<div class="flex-1 space-y-4 p-8 pt-6">
		<div class="flex items-center justify-between space-y-2">
			<h2 class="text-3xl font-bold tracking-tight">Dashboard</h2>
			<!-- <div class="flex items-center space-x-2">
				<DarkToggler />
				<UserNav />
				<DatePickerWithRange />
				<Button size="sm">
					<Download class="mr-2 h-4 w-4" />
					Download
				</Button>
			</div> -->
		</div>
		<Tabs.Root value="overview" class="space-y-4">
			<Tabs.List>
				<Tabs.Trigger value="overview">Overview</Tabs.Trigger>
				<Tabs.Trigger value="marks">Marks</Tabs.Trigger>
				<Tabs.Trigger value="reports">Students</Tabs.Trigger>
				<Tabs.Trigger value="notifications">Notifications</Tabs.Trigger>
			</Tabs.List>
			<Tabs.Content value="overview" class="space-y-4">
				<DashOverview />
			</Tabs.Content>
			<Tabs.Content value="marks" class="space-y-4">
				<MarkTable />
			</Tabs.Content>
		</Tabs.Root>
	</div>
</div>
