<script>
  
    import { page } from '$app/stores';

    export let name = 'Home';
    export let icon = 'fa-house';
    export let route = '/';
</script>

<li>
	<a
		href={route}
		class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
		class:dark:bg-gray-700={$page.url.pathname === route}
		class:bg-gray-100={$page.url.pathname === route}
	>
		<i class="fa-solid {icon}" /><span class="ml-3">{name}</span>
	</a>
</li>
