<script lang="ts">
	import Box from '../../components/Box.svelte';
	import Connector from '../../components/Connector.svelte';
	import { shapes } from '../../stores';
	import { connections } from '../../stores';
	
</script>

<div id="diagram" class=" bg-gray-300 dark:bg-gray-800" style="z-inde : 100">
	<svg class="w-full h-full dark:text-gray-900 text-white fill-current dark:stroke-white stroke-gray-900 stroke-2" style="z-index: 0">
		<defs>
			<marker id="startarrow" markerWidth="15" markerHeight="10" 
			refX="0" refY="5" orient="auto" markerUnits="userSpaceOnUse">
			  <polyline points="15 0, 0 5, 15 10" class="text-gray-900 dark:text-white fill-none  stroke-current" />
			</marker>
			<marker id="endarrow" markerWidth="15" markerHeight="10" 
			refX="15" refY="5" orient="auto" markerUnits="userSpaceOnUse">
				<polyline points="0 0, 15 5, 0 10" class="text-gray-900 dark:text-white fill-none  stroke-current"/>
			</marker>
		  </defs>
		{#each $connections as connection}
			<Connector from={$shapes[connection.from]} to={$shapes[connection.to]} hasArrow={connection.hasArrow} bidirectional = {connection.bidirectional} />
		{/each}

		{#each $shapes as box }
				<Box bind:box={box} ></Box>/>
		{/each}
	</svg>
</div>

<style>
	#diagram {
		width: 100%;
		height: 100%;
	}
</style>
