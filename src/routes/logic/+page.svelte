<script lang="ts">
	import Box from '../../components/Box.svelte';
	import Connector from '../../components/Connector.svelte';
	import Draggable from '../../components/Draggable.svelte';
	import { Vector, type Shape } from '../../components/Geometry';

	// create 4 Shapes
	let shapes: Shape[] = [
		{
			location: new Vector(0, 0),
			width: 100,
			height: 50
		},
		{
			location: new Vector(100, 0),
			width: 100,
			height: 50
		},
		{
			location: new Vector(200, 0),
			width: 100,
			height: 50
		},
		{
			location: new Vector(300, 0),
			width: 100,
			height: 50
		}
	];
	let connections = [
		{ from: 0, to: 1, hasArrow: true , bidirectional: true},
		{ from: 1, to: 2, hasArrow: true , bidirectional: false },
		{ from: 2, to: 3, hasArrow: false , bidirectional: true }
	];
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
		{#each connections as connection}
			<Connector from={shapes[connection.from]} to={shapes[connection.to]} hasArrow={connection.hasArrow} bidirectional = {connection.bidirectional} />
		{/each}

		{#each shapes as box}
			<!-- create draggable for box and bind x and y to top and left-->
			<Draggable bind:left={box.location.x} bind:top={box.location.y}>
				<Box />
			</Draggable>
		{/each}
	</svg>
</div>

<style>
	#diagram {
		width: 100%;
		height: 100%;
	}
</style>
