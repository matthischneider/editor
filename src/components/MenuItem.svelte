<script>
  
    import { page } from '$app/stores';

    export let name = 'Home';
    export let icon = 'fa-house';
    export let route = '/';

	$: active = $page.url.pathname === route;

</script>

<li class="overflow-hidden">
	<a
		href={route}
		class="flex items-center pb-2 text-lg font-semibold 
		 hover:bg-gray-100 dark:hover:bg-gray-700 
		 {active?' dark:bg-gray-700 bg-gray-100  text-gray-900 dark:text-white':'  text-gray-400 dark:text-gray-400 '}"
	>
		<i class="fa-solid {icon} text-2xl m-3 " /><span>{name}</span>
	</a>
</li>
