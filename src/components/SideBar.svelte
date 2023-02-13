<script>
  import MenuItem from './MenuItem.svelte';


	let menu = [
		{ id: 'home', name: 'Home', icon: 'fa-house' , route : '/'},
		{ id: 'screen', name: 'Screen', icon: 'fa-pen-to-square', route : '/screen' },
		{ id: 'logic', name: 'Logic', icon: 'fa-code', route : '/logic' }
	];

	const toggleDark = () => 
	{
		document.documentElement.classList.toggle('dark');
	}

</script>


	<aside class="h-full w-64" aria-label="Sidebar">
		<div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
			<ul class="space-y-2">
				{#each menu as item}
					<MenuItem {...item}/>
				{/each}
			</ul>

			<button class="flex border-solid border-2 items-center p-2 text-base font-normal text-gray-900 rounded-3xl dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"  on:click={toggleDark}>
				<span class="mr-1"> darkmode</span><i class="fa-solid fa-sun dark:hidden inline"/><i class="fa-solid fa-ghost hidden dark:inline"/>
			</button>
		</div>
	</aside>

