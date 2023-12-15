<script lang="ts">
	import * as Table from '$lib/components/ui/table';
	import { db } from '../../lib/db';
	import * as schema from '../../lib/db/shema';

	const get_table = async () => {
		// const result = await db.select().from(schema.applicants);
		const result = await db.query.student_tbl.findMany({
			limit: 10,
			offset: 0
		});
		return result;
	};
	const headers = [
		'Index No',
		'Name',
		'SGID',
		'Medium',
		'DRID',
		/* 'Ranking D', */
		'DSID',
		'CID',
		'NIC',
		'Gender',
		'School',
		'Address',
		'Email',
		'Telephone',
		'Checked',
		'reg by',
		'reg date',
		'check by',
		'check date'
	];
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
					{#each headers as header}
						<Table.Head>{header}</Table.Head>
					{/each}
				</Table.Row>
			</Table.Header>
			<Table.Body>
				{#each result as res}
					<Table.Row>
						{#each Object.entries(res) as [key, value]}
							<Table.Cell>
								{key === 'checked' ? (value ? 'YES' : 'NO') : value}
							</Table.Cell>
						{/each}
					</Table.Row>
				{/each}
			</Table.Body>
		</Table.Root>
	{:catch error}
		<p>Something went wrong</p>
	{/await}
</div>
