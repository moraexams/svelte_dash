<script lang="ts">
	import * as Table from '$lib/components/ui/table';
	import { db } from '$lib/db';
	import * as schema from '$lib/db/shema';
	import { Terminal } from 'lucide-svelte';
	import * as Alert from '$lib/components/ui/alert';

	const get_table = async () => {
		const result = await db.query.mark_tbl.findMany({
			limit: 50,
			offset: 0
		});
		return result;
	};
	const headers = [
		'Index No',
		'Subject1 P1',
		'Subject1 P2',
		'Subject2 P1',
		'Subject2 P2',
		'Subject3 P1',
		'Subject3 P2'
		// 'Subject1 P1 entered by',
		// 'Subject1 P1 checked',
		// 'Subject1 P1 checked by',
		// 'Subject1 P2',
		// 'Subject1 P2 entered by',
		// 'Subject1 P2 checked',
		// 'Subject1 P2 checked by',
		// 'Subject2 P1',
		// 'Subject2 P1 entered by',
		// 'Subject2 P1 checked',
		// 'Subject2 P1 checked by',
		// 'Subject2 P2',
		// 'Subject2 P2 entered by',
		// 'Subject2 P2 checked',
		// 'Subject2 P2 checked by',
		// 'Subject3 P1',
		// 'Subject3 P1 entered by',
		// 'Subject3 P1 checked',
		// 'Subject3 P1 checked by',
		// 'Subject3 P2',
		// 'Subject3 P2 entered by',
		// 'Subject3 P2 checked',
		// 'Subject3 P2 checked by'
	];
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="w-auto m-auto">
	{#await get_table()}
		<Alert.Root>
			<Terminal class="h-4 w-4" />
			<Alert.Title>Calculating...</Alert.Title>
			<Alert.Description>Getting your stuff from a devine place...</Alert.Description>
		</Alert.Root>
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
								{key === 'sub1_p1_checked' ||
								key === 'sub1_p2_checked' ||
								key === 'sub2_p1_checked' ||
								key === 'sub2_p2_checked' ||
								key === 'sub3_p1_checked' ||
								key === 'sub3_p2_checked'
									? value === 1
										? 'YES'
										: 'NO'
									: value}
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
