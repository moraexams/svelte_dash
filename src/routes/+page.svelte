<script lang="ts">
	import * as Table from '$lib/components/ui/table';
	import { DashboardPage } from '$lib/components/dashboard';
	// $: if (count >= 10) {
	// 	alert('count is dangerously high!');
	// 	count = 0;
	// }
</script>

<!-- todo: auth logic to render dashboard or to redirect to auth -->
<DashboardPage />
