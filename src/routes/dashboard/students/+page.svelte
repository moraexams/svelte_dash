<script lang="ts">
	import * as Table from '$lib/components/ui/table';
	// import { db } from '../../lib/db';
	// import * as schema from '../../lib/db/shema';
	import { Terminal } from 'lucide-svelte';
	import * as Alert from '$lib/components/ui/alert';
	import type { PageData } from './$types';
	import { WEBSITE_TITLE } from '$lib/values';
	import PageTitle from '$lib/components/page-title.svelte';

	export let data: PageData;
	// console.log(data);

	// const get_table = async () => {
	// 	// const result = await db.select().from(schema.applicants);
	// 	const result = await db.query.student_tbl.findMany({
	// 		limit: 10,
	// 		offset: 0
	// 	});
	// 	return result;
	// };

	const headers = [
		'Index No',
		'Name',
		'NIC',
		'SGID',
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

	function formatValueDisplay(value: string | number | boolean | Date | null | unknown) {
		if (value === 'female' || value === 'male')
			return value.charAt(0).toUpperCase().concat(value.slice(1));

		switch (typeof value) {
			case 'boolean':
				return value ? 'YES' : 'NO';
			default:
				return value;
		}
	}
</script>

<svelte:head>
	<title>Students | {WEBSITE_TITLE}</title>
	<meta name="hello" content="All abouttttt" />
</svelte:head>

<PageTitle>Students</PageTitle>

<div class="w-auto m-auto">
	{#await data.students}
		<Alert.Root>
			<Terminal class="h-4 w-4" />
			<Alert.Title>Calculating...</Alert.Title>
			<Alert.Description>Getting your stuff from a devine place...</Alert.Description>
		</Alert.Root>
	{:then result}
		<Table.Root class="w-auto m-auto">
			<Table.Header>
				<Table.Row>
					{#each headers as header}
						<Table.Head>{header}</Table.Head>
					{/each}
				</Table.Row>
			</Table.Header>
			<Table.Body>
				{#each result as res}
					<Table.Row>
						{#each Object.values(res) as value}
							<Table.Cell>
								{formatValueDisplay(value)}
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
