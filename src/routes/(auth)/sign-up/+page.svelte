<script lang="ts">
	import HalfSection from '$lib/components/auth/half-section.svelte';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { WEBSITE_TITLE } from '$lib/values';
</script>

<svelte:head>
	<title>Sign Up | {WEBSITE_TITLE}</title>
</svelte:head>

<div
	class="container relative h-[100vh] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0"
>
	<HalfSection />
	<div class="lg:p-8">
		<div class="mx-auto flex w-full flex-col justify-center space-y-5 max-w-md items-center">
			<div class="flex flex-col space-y-2 text-center">
				<h1 class="text-2xl font-semibold tracking-tight">Sign Up</h1>
				<p class="text-sm text-muted-foreground w-80">
					After you sign up here, you have to be verified by web team of {WEBSITE_TITLE}
				</p>
			</div>

			<div class="grid gap-2 w-full">
				<Label for="name">Name</Label>
				<Input id="text" type="name" placeholder="Harry Potter" required />
			</div>

			<div class="grid gap-2 w-full">
				<Label for="email">Email</Label>
				<Input id="email" type="email" placeholder="m@example.com" required />
			</div>
			<div class="grid gap-2 w-full">
				<Label for="password">Password</Label>
				<Input id="password" type="password" required />
			</div>
			<div class="grid gap-2 w-full">
				<Label for="confirm-password">Confirm Password</Label>
				<Input id="confirm-password" type="password" required />
			</div>
			<div class="w-full text-center">
				<Button class="w-full mb-2">Sign up</Button>
				<a href="/login">
					<Button variant="link">Already have an account?</Button>
				</a>
			</div>

			<p class="px-8 text-center text-sm text-muted-foreground">
				By clicking continue, you agree to our{' '}
				<a href="/terms" class="underline underline-offset-4 hover:text-primary">
					Terms of Service
				</a>{' '}
				and{' '}
				<a href="/privacy" class="underline underline-offset-4 hover:text-primary">
					Privacy Policy
				</a>
				.
			</p>
		</div>
	</div>
</div>
