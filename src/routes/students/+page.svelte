<script lang="ts">
	import * as Table from '$lib/components/ui/table';
	import { db } from '../../lib/db';
	import * as schema from '../../lib/db/shema';

	const get_table = async () => {
		// const result = await db.select().from(schema.applicants);
		// const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1000');
		// const data = await result.json();
		const result = await db.query.student_tbl.findMany({
			limit: 50,
			offset: 0
		});
		return result;
	};
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="w-auto m-auto">
	{#await get_table()}
		<p>Fetching...</p>
	{:then result}
		<Table.Root class="w-auto m-auto">
			<!-- <Table.Caption>A list of your recent invoices.</Table.Caption> -->
			<Table.Header>
				<Table.Row>
					<!-- <Table.Head class="w-[100px]">Index No</Table.Head> -->
					<Table.Head>Index No</Table.Head>
					<Table.Head>Name</Table.Head>
					<Table.Head>SGID</Table.Head>
					<Table.Head>Medium</Table.Head>
					<Table.Head>DRID</Table.Head>
					<!-- <Table.Head>Ranking D</Table.Head> -->
					<Table.Head>DSID</Table.Head>
					<Table.Head>CID</Table.Head>
					<Table.Head>NIC</Table.Head>
					<Table.Head>Gender</Table.Head>
					<Table.Head>School</Table.Head>
					<Table.Head>Address</Table.Head>
					<Table.Head>Email</Table.Head>
					<Table.Head>Telephone</Table.Head>
					<Table.Head>Checked</Table.Head>
					<Table.Head>reg by</Table.Head>
					<Table.Head>reg date</Table.Head>
					<Table.Head>check by</Table.Head>
					<Table.Head>check date</Table.Head>
					<!-- <Table.Head class="text-right">NIC</Table.Head> -->
				</Table.Row>
			</Table.Header>
			<Table.Body>
				{#each result as res}
					<!-- <p>{res.name}</p> -->
					<Table.Row>
						<Table.Cell class="font-medium">{res.id}</Table.Cell>
						<Table.Cell>{res.name}</Table.Cell>
						<Table.Cell>{res.sub_grp}</Table.Cell>
						<Table.Cell>{res.medium}</Table.Cell>
						<Table.Cell>{res.rnk_dist_id}</Table.Cell>
						<!-- <Table.Cell>{res.rnk_dist}</Table.Cell> -->
						<Table.Cell>{res.exm_dist_id}</Table.Cell>
						<Table.Cell>{res.exm_cent_id}</Table.Cell>
						<Table.Cell>{res.nic}</Table.Cell>
						<Table.Cell>{res.gender}</Table.Cell>
						<Table.Cell>{res.school}</Table.Cell>
						<Table.Cell>{res.address}</Table.Cell>
						<Table.Cell>{res.email}</Table.Cell>
						<Table.Cell>{res.telephone}</Table.Cell>
						<Table.Cell>{(res.checked && 'YES') || 'NO'}</Table.Cell>
						<Table.Cell>{res.reg_by}</Table.Cell>
						<Table.Cell>{res.reg_dt}</Table.Cell>
						<Table.Cell>{res.chk_by}</Table.Cell>
						<Table.Cell>{res.chk_dt}</Table.Cell>
						<!-- <Table.Cell class="text-right">{res.nic}</Table.Cell> -->
					</Table.Row>
				{/each}
			</Table.Body>
		</Table.Root>
	{:catch error}
		<p>Something went wrong</p>
	{/await}
</div>
