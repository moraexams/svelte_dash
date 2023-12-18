<script lang="ts">
	import { Activity, CreditCard, DollarSign, Download, Users } from 'lucide-svelte';
	import { Button } from '$lib/components/ui/button';
	import { DarkToggler } from '$lib/components/ui/special-btns';
	import * as Card from '$lib/components/ui/card';
	import * as Tabs from '$lib/components/ui/tabs';
	import Info from '$lib/components/ui/Images/info-1459077_640.png';
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
	import AddApplicant from '../addstudent/+page.svelte';

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

	import { writable } from 'svelte/store';
	import Modal from 'svelte-simple-modal';
	import Popup from './Popup.svelte';
	const modal = writable(null);
	const showModal = () => modal.set(Popup);
	const hideModal = () => modal.set(null);
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
		<Tabs.Trigger value="view">View</Tabs.Trigger>
		<Tabs.Trigger value="manage">Manage</Tabs.Trigger>
		<Tabs.Trigger value="addApplicant">Add applicant</Tabs.Trigger>
	</Tabs.List>
	<Tabs.Content value="view" class="space-y-4">
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
							<Table.Head>No.</Table.Head>
							<Table.Head class="w-[100px]">Index No</Table.Head>
							<Table.Head>Name</Table.Head>
							<Table.Head>E Mail</Table.Head>
							<Table.Head class="text-right">NIC</Table.Head>
							<Table.Head>Info</Table.Head>
						</Table.Row>
					</Table.Header>
					<Table.Body>
						{#each result as res, i}
							<!-- <p>{res.name}</p> -->
							<Table.Row>
								<Table.Cell>{i + 1 + offset}</Table.Cell>
								<Table.Cell class="font-medium">{res.id}</Table.Cell>
								<Table.Cell>{res.name}</Table.Cell>
								<Table.Cell>{res.email}</Table.Cell>
								<Table.Cell>{res.nic}</Table.Cell>
								<Table.Cell
									><Modal show={$modal} closeOnOuterClick={true} on:close={hideModal}>
										<button on:click={showModal}> <img src={Info} class="h-8 w-8" /></button>
									</Modal></Table.Cell
								>
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
	<Tabs.Content value="manage" class="space-y-4">
		<div>
			<button>Add Student</button>
		</div>
	</Tabs.Content>
</Tabs.Root>
