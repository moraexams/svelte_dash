<script>
	import UserNav from "./user-nav.svelte";
	import MainNav from "../ui/nav/main-nav.svelte";
	import { DarkToggler } from "../ui/special-btns";
</script>

<div class="border-b">
	<div class="flex h-16 items-center px-4">
		<!-- <TeamSwitcher /> -->
		<MainNav
			class="mx-6"
			items={[
				{
					href: '/marks',
					title: 'Marks'
				},
				{
					href: './students',
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
