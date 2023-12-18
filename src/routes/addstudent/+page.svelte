<script lang="ts" context="module">
	// import { z } from 'zod';

	const districts = {
		Ampara: 'Ampara',
		Anuradhapura: 'Anuradhapura',
		Badulla: 'Badulla',
		Batticaloa: 'Batticaloa',
		Colombo: 'Colombo',
		Gampaha: 'Gampaha',
		Galle: 'Galle',
		Hambantota: 'Hambantota',
		Jaffna: 'Jaffna',
		Kalutura: 'Kalutura',
		Kandy: 'Kandy',
		Kegalle: 'Kegalle',
		Kilinochchi: 'Kilinochchi',
		Kurunegala: 'Kurunegala',
		Mannar: 'Mannar',
		Matale: 'Matara',
		Vavuniya: 'Vavuniya',
		Mullaithivu: 'Mullaithivu',
		NuwaraEliya: 'NuwaraEliya',
		Puttalam: 'Puttalam',
		ko: 'Trincomalee'
	} as const;

	type Districts = keyof typeof districts;

	export const accountFormSchema = z.object({
		name: z
			.string({
				required_error: 'Required.'
			})
			.min(2, 'Name must be at least 2 characters.')
			.max(30, 'Name must not be longer than 30 characters'),
		// Hack: https://github.com/colinhacks/zod/issues/2280
		language: z.enum(Object.keys(districts) as [Districts, ...Districts[]])
	});

	export type AccountFormSchema = typeof accountFormSchema;
	import { Label } from '$lib/components/ui/label';

	import { z } from 'zod';
	export const notificationsFormSchema = z.object({
		type: z.enum(['all', 'mentions', 'none'], {
			required_error: 'You need to select a notification type.'
		}),
		mobile: z.boolean().default(false).optional(),
		communication_emails: z.boolean().default(false).optional(),
		social_emails: z.boolean().default(false).optional(),
		marketing_emails: z.boolean().default(false).optional(),
		security_emails: z.boolean()
	});
	// type NotificationFormSchema = typeof notificationsFormSchema;
</script>

<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import type { SuperValidated } from 'sveltekit-superforms';
	import { cn } from '../../lib/utils';

	export let data: SuperValidated<AccountFormSchema>;
	import CardsPaymentMethod from '../../lib/components/ui/PaymentCard/payment-method.svelte';
	import DemoContainer from '../../lib/components/ui/PaymentCard/demo-container.svelte';
	import CardsCreateAccount from '../../lib/components/ui/PaymentCard/create-account.svelte';
	import { Button } from '../../lib/components/ui/button';
</script>

<Form.Root
	method="POST"
	class="space-y-8"
	let:config
	schema={accountFormSchema}
	form={data}
	debug={false}
>
	<div class="text-center text-4xl mt-10">Add Student</div>
	<div class="mx-[20%]">
		<div class="grid grid-cols-1 sm:grid-cols-2 text-2xl">
			<div class="mx-8">
				<Form.Item>
					<Form.Field name="indexNumber" {config}>
						<Form.Label>Index Number</Form.Label>
						<Form.Input placeholder="index number" />

						<Form.Validation />
					</Form.Field>
				</Form.Item>
			</div>
			<div class="mx-8">
				<Form.Item>
					<Form.Field name="nic" {config}>
						<Form.Label>NIC</Form.Label>
						<Form.Input placeholder="NIC" />

						<Form.Validation />
					</Form.Field>
				</Form.Item>
			</div>
			<div class="mx-8">
				<Form.Item>
					<Form.Field name="fname" {config}>
						<Form.Label>First Name</Form.Label>
						<Form.Input placeholder="First name" />

						<Form.Validation />
					</Form.Field>
				</Form.Item>
			</div>
			<div class="mx-8">
				<Form.Item>
					<Form.Field name="lname" {config}>
						<Form.Label>Last Name</Form.Label>
						<Form.Input placeholder="Last name" />

						<Form.Validation />
					</Form.Field>
				</Form.Item>
			</div>

			<div class="mx-8">
				<Form.Item>
					<Form.Field name="school" {config}>
						<Form.Label>School</Form.Label>
						<Form.Input placeholder="School" />

						<Form.Validation />
					</Form.Field>
				</Form.Item>
			</div>
			<div class="mx-8">
				<Form.Item>
					<Form.Field name="telephone" {config}>
						<Form.Label>Telephone</Form.Label>
						<Form.Input placeholder="Telephone" />

						<Form.Validation />
					</Form.Field>
				</Form.Item>
			</div>
			<div class="mx-8">
				<Form.Item>
					<Form.Field name="address" {config}>
						<Form.Label>Address</Form.Label>
						<Form.Input placeholder="Address" />

						<Form.Validation />
					</Form.Field>
				</Form.Item>
			</div>
			<div class="mx-8">
				<Form.Item>
					<Form.Field name="email" {config}>
						<Form.Label>Email</Form.Label>
						<Form.Input placeholder="Email address" />

						<Form.Validation />
					</Form.Field>
				</Form.Item>
			</div>
		</div>
		<div class="grid grid-cols-3">
			<div class="mx-8">
				<Form.Item>
					<Form.Field {config} name="sitting district" let:attrs>
						{@const { value } = attrs.input}
						<Form.Label>District for exam sitting</Form.Label>
						<Form.Select selected={{ value, label: districts[value] }}>
							<Form.SelectTrigger
								placeholder="Select District"
								class={cn(
									'w-[200px] justify-between',
									!attrs.input.value && 'text-muted-foreground'
								)}
							/>
							<Form.SelectContent class="h-52 overflow-y-auto">
								{#each Object.entries(districts) as [value, lang]}
									<Form.SelectItem {value}>
										{lang}
									</Form.SelectItem>
								{/each}
							</Form.SelectContent>
						</Form.Select>
						<!-- <Form.Description>This is the language that will be used in the dashboard.</Form.Description> -->
						<!-- <Form.Validation /> -->
					</Form.Field>
				</Form.Item>
			</div>
			<div class="mx-8">
				<Form.Item>
					<Form.Field {config} name="ranking district" let:attrs>
						{@const { value } = attrs.input}
						<Form.Label>District for ranking</Form.Label>
						<Form.Select selected={{ value, label: districts[value] }}>
							<Form.SelectTrigger
								placeholder="Select District"
								class={cn(
									'w-[200px] justify-between',
									!attrs.input.value && 'text-muted-foreground'
								)}
							/>
							<Form.SelectContent class="h-52 overflow-y-auto">
								{#each Object.entries(districts) as [value, lang]}
									<Form.SelectItem {value}>
										{lang}
									</Form.SelectItem>
								{/each}
							</Form.SelectContent>
						</Form.Select>
						<!-- <Form.Description>This is the language that will be used in the dashboard.</Form.Description> -->
						<Form.Validation />
					</Form.Field>
				</Form.Item>
			</div>
			<div class="mx-8">
				<Form.Item>
					<Form.Field {config} name="exam center" let:attrs>
						{@const { value } = attrs.input}
						<Form.Label>Exam Center</Form.Label>
						<Form.Select selected={{ value, label: districts[value] }}>
							<Form.SelectTrigger
								placeholder="Select Center"
								class={cn(
									'w-[200px] justify-between',
									!attrs.input.value && 'text-muted-foreground'
								)}
							/>
							<Form.SelectContent class="h-52 overflow-y-auto">
								{#each Object.entries(districts) as [value, lang]}
									<Form.SelectItem {value}>
										{lang}
									</Form.SelectItem>
								{/each}
							</Form.SelectContent>
						</Form.Select>
						<!-- <Form.Description>This is the language that will be used in the dashboard.</Form.Description> -->
						<!-- <Form.Validation /> -->
					</Form.Field>
				</Form.Item>
			</div>
		</div>
		<div class="grid grid-cols-2 items-center">
			<div class="mx-8">
				<Form.Item>
					<Form.Field {config} name="medium">
						<Form.Label>Medium</Form.Label>
						<Form.RadioGroup class="flex flex-col space-y-1">
							<div class="flex items-center space-x-3">
								<Form.RadioItem value="tamil" id="tamil" />
								<Label for="tamil" class="font-normal">Tamil</Label>
							</div>
							<div class="flex items-center space-x-3">
								<Form.RadioItem value="english" id="english" />
								<Label for="english" class="font-normal">English</Label>
							</div>
						</Form.RadioGroup>
					</Form.Field>
				</Form.Item>
			</div>
			<div class="mx-8">
				<Form.Item>
					<Form.Field {config} name="gender">
						<Form.Label>Gender</Form.Label>
						<Form.RadioGroup class="flex flex-col space-y-1">
							<div class="flex items-center space-x-3">
								<Form.RadioItem value="male" id="male" />
								<Label for="male" class="font-normal">Male</Label>
							</div>
							<div class="flex items-center space-x-3">
								<Form.RadioItem value="female" id="female" />
								<Label for="female" class="font-normal">Female</Label>
							</div>
						</Form.RadioGroup>
					</Form.Field>
				</Form.Item>
			</div>
		</div>
	</div>
	<div class="text-center">
		<Form.Button>Reset</Form.Button>
		<Form.Button>Add student</Form.Button>
	</div>
</Form.Root>
