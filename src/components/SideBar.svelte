<script>
	import MenuItem from './MenuItem.svelte';

	let menu = [
		{ id: 'home', name: 'Home', icon: 'fa-house', route: '/' },
		{ id: 'screen', name: 'Screen', icon: 'fa-pen-to-square', route: '/screen' },
		{ id: 'logic', name: 'Logic', icon: 'fa-code', route: '/logic' }
	];

	const toggleDark = () => {
		document.documentElement.classList.toggle('dark');
	};

	const toggleMenu = () => {
		document.documentElement.classList.toggle('menu-open');
	};

</script>

<aside class="transition-[width] ease-in-out h-full hover:w-64 w-12" aria-label="Sidebar">
	<div class="flex flex-col h-full overflow-y-auto bg-gray-50 dark:bg-gray-800">
		<ul>
			{#each menu as item}
				<MenuItem {...item} />
			{/each}
		</ul>
		<!-- right aligned dar mode switch-->
		<button
			class="object-bottom p-2 text-base font-normal text-gray-900 rounded-3xl dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
			on:click={toggleDark}
		>
			<i class="fa-solid fa-circle-half-stroke inline" />
		</button>
	</div>
</aside>
