<script lang="ts">
	import { Activity, CreditCard, DollarSign, Download, Users } from 'lucide-svelte';
	import { Button } from '$lib/components/ui/button';
	import { DarkToggler } from '$lib/components/ui/special-btns';
	import * as Card from '$lib/components/ui/card';
	import * as Tabs from '$lib/components/ui/tabs';
	import { DashboardMainNav, Overview, RecentSales, Search, UserNav, TeamSwitcher } from '.';
	import DatePickerWithRange from './date-picker-with-range.svelte';

	import * as Table from '$lib/components/ui/table';
	import { db } from '$lib/db';
	import * as schema from '$lib/db/shema';
	import { get_table } from '$lib/utils';
	import SearchBar from './search.svelte';
	import SC from './user-nav.svelte';

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
			<h2 class="text-3xl font-bold tracking-tight">Dashboard</h2>
			<div class="flex items-center space-x-2"></div>
		</div>
		<Tabs.Root value="overview" class="space-y-4">
			<Tabs.List>
				<Tabs.Trigger value="overview">Overview</Tabs.Trigger>
				<Tabs.Trigger value="viewMarks">View marks</Tabs.Trigger>
				<Tabs.Trigger value="reports" disabled>Reports</Tabs.Trigger>
				<Tabs.Trigger value="notifications" disabled>Notifications</Tabs.Trigger>
			</Tabs.List>
			<Tabs.Content value="overview" class="space-y-4">
				<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
					<Card.Root>
						<Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
							<Card.Title class="text-sm font-medium">Total Revenue</Card.Title>
							<DollarSign class="h-4 w-4 text-muted-foreground" />
						</Card.Header>
						<Card.Content>
							<div class="text-2xl font-bold">$45,231.89</div>
							<p class="text-xs text-muted-foreground">+20.1% from last month</p>
						</Card.Content>
					</Card.Root>
					<Card.Root>
						<Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
							<Card.Title class="text-sm font-medium">Subscriptions</Card.Title>
							<Users class="h-4 w-4 text-muted-foreground" />
						</Card.Header>
						<Card.Content>
							<div class="text-2xl font-bold">+2350</div>
							<p class="text-xs text-muted-foreground">+180.1% from last month</p>
						</Card.Content>
					</Card.Root>
					<Card.Root>
						<Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
							<Card.Title class="text-sm font-medium">Sales</Card.Title>
							<CreditCard class="h-4 w-4 text-muted-foreground" />
						</Card.Header>
						<Card.Content>
							<div class="text-2xl font-bold">+12,234</div>
							<p class="text-xs text-muted-foreground">+19% from last month</p>
						</Card.Content>
					</Card.Root>
					<Card.Root>
						<Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
							<Card.Title class="text-sm font-medium">Active Now</Card.Title>
							<Activity class="h-4 w-4 text-muted-foreground" />
						</Card.Header>
						<Card.Content>
							<div class="text-2xl font-bold">+573</div>
							<p class="text-xs text-muted-foreground">+201 since last hour</p>
						</Card.Content>
					</Card.Root>
				</div>
				<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
					<Card.Root class="col-span-4">
						<Card.Header>
							<Card.Title>Overview</Card.Title>
						</Card.Header>
						<Card.Content>
							<Overview />
						</Card.Content>
					</Card.Root>
					<Card.Root class="col-span-3">
						<Card.Header>
							<Card.Title>Recent Sales</Card.Title>
							<Card.Description>You made 265 sales this month.</Card.Description>
						</Card.Header>
						<Card.Content>
							<RecentSales />
						</Card.Content>
					</Card.Root>
				</div>
			</Tabs.Content>
			<Tabs.Content value="viewMarks" class="space-y-4">
				<div style="text-align: center;">
					<button on:click={decrementOffset}> Back </button>
					<button on:click={incrementOffset}> Next </button>
					<button on:click={limitset25}> 25 </button>
					<button on:click={limitset50}> 50 </button>
					<button on:click={limitset100}> 100 </button>
				</div>

				<div class="w-auto m-auto">
					{#await get_table(offset, limit)}
						<p>fetching</p>
					{:then result}
						<Table.Root class="w-auto m-auto">
							<!-- <Table.Caption>A list of your recent invoices.</Table.Caption> -->
							<Table.Header>
								<Table.Row>
									<Table.Head class="w-[100px]">Index No</Table.Head>
									<Table.Head>Name</Table.Head>
									<Table.Head>E Mail</Table.Head>
									<Table.Head class="text-right">NIC</Table.Head>
								</Table.Row>
							</Table.Header>
							<Table.Body>
								{#each result as res}
									<!-- <p>{res.name}</p> -->
									<Table.Row>
										<Table.Cell class="font-medium">{res.id}</Table.Cell>
										<Table.Cell>{res.name}</Table.Cell>
										<Table.Cell>{res.email}</Table.Cell>
										<Table.Cell>{res.nic}</Table.Cell>
										<!-- <Table.Cell class="text-right">{res.nic}</Table.Cell> -->
									</Table.Row>
								{/each}
							</Table.Body>
						</Table.Root>
					{:catch error}
						<p>Something went wrong</p>
					{/await}
					<!-- {#each result as res, i (i)}
				
				{/each} -->
				</div>
			</Tabs.Content>
		</Tabs.Root>
	</div>
</div>
