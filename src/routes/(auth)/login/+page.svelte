<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { WEBSITE_TITLE } from '$lib/values';
</script>

<svelte:head>
	<title>Login | {WEBSITE_TITLE}</title>
</svelte:head>

<div
	class="container relative h-[100vh] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0"
>
	<div class="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
		<div
			class="absolute inset-0 bg-cover"
			style="
				background-image: url('/login-page-image.avif');
			"
		/>
		<div class="relative z-20 flex items-center text-lg font-medium">{WEBSITE_TITLE}</div>
	</div>
	<div class="lg:p-8">
		<div class="mx-auto flex w-full flex-col justify-center space-y-5 max-w-md items-center">
			<div class="flex flex-col space-y-2 text-center">
				<h1 class="text-2xl font-semibold tracking-tight">Login</h1>
				<p class="text-sm text-muted-foreground">Enter your email below to login to your account</p>
			</div>

			<div class="grid gap-2 w-full">
				<Label for="email">Email</Label>
				<Input id="email" type="email" placeholder="m@example.com" required />
			</div>
			<div class="grid gap-2 w-full">
				<Label for="password">Password</Label>
				<Input id="password" type="password" required />
			</div>
			<div class="w-full text-center">
				<Button class="w-full mb-2">Sign in</Button>
				<a href="/sign-up">
					<Button variant="link">Create Account</Button>
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
