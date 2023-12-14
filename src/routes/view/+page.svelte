<script lang="ts">
	import * as Table from '$lib/components/ui/table';
	import { db } from '../../lib/db';
	import * as schema from '../../lib/db/shema';

	const get_table = async () => {
		const result = await db.select().from(schema.applicants);
		// const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1000');
		// const data = await result.json();
		return result;
	};

	const invoices = [
		{
			invoice: 'INV001',
			paymentStatus: 'Paid',
			totalAmount: '$250.00',
			paymentMethod: 'Credit Card'
		},
		{
			invoice: 'INV002',
			paymentStatus: 'Pending',
			totalAmount: '$150.00',
			paymentMethod: 'PayPal'
		},
		{
			invoice: 'INV003',
			paymentStatus: 'Unpaid',
			totalAmount: '$350.00',
			paymentMethod: 'Bank Transfer'
		},
		{
			invoice: 'INV004',
			paymentStatus: 'Paid',
			totalAmount: '$450.00',
			paymentMethod: 'Credit Card'
		},
		{
			invoice: 'INV005',
			paymentStatus: 'Paid',
			totalAmount: '$550.00',
			paymentMethod: 'PayPal'
		},
		{
			invoice: 'INV006',
			paymentStatus: 'Pending',
			totalAmount: '$200.00',
			paymentMethod: 'Bank Transfer'
		},
		{
			invoice: 'INV007',
			paymentStatus: 'Unpaid',
			totalAmount: '$300.00',
			paymentMethod: 'Credit Card'
		}
	];
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="w-auto m-auto">
	{#await get_table()}
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
