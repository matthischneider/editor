<script>
	import '../app.css';
	import SideBar from '../components/SideBar.svelte';
</script>

<svelte:head>
	<script>
		// On page load or when changing themes, best to add inline in `head` to avoid FOUC
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	</script>
</svelte:head>

<div class="flex h-screen">
	<div class="flex-none h-full">
		<SideBar />
	</div>
	<div class="flex-grow h-full">
		<div class="grow h-14 w-full bg-slate-500">
			<h1>Header</h1>
		</div>
		<slot />
	</div>
	<div class="flex-none w-14 h-full bg-slate-500">03</div>
</div>
