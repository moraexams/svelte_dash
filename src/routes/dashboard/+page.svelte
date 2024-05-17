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
	} from '../../lib/components/dashboard';
	import DatePickerWithRange from '../../lib/components/dashboard/date-picker-with-range.svelte';
	import { WEBSITE_TITLE } from '$lib/values';

	/** @type {import("./$types").PageServerLoad}*/
	export let data;
</script>

<svelte:head>
	<title>Dashboard | {WEBSITE_TITLE}</title>
</svelte:head>

<div class="flex-1 space-y-4 p-8 pt-6">
	<Card.Root class="max-w-sm">
		<Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
			<Card.Title class="text-sm font-medium">Students</Card.Title>
			<Users class="h-4 w-4 text-muted-foreground" />
		</Card.Header>
		<Card.Content>
			<div class="text-2xl font-bold">{data.students.total}</div>
			<p class="text-sm text-muted-foreground">
				Verified percentage {data.students.verifiedPercentage}%
			</p>
		</Card.Content>
	</Card.Root>

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
