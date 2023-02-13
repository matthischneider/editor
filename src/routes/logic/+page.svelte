<script lang="ts">
	import { onMount } from "svelte";
	import Box from "../../components/Box.svelte";
	import Draggable from "../../components/Draggable.svelte";


	let boxes = [
		// use tailwind css to style 4 boxes
		{ id: "box1", x: 0, y: 0, width: 100, height: 100, style: "" },
		{ id: "box2", x: 100, y: 0, width: 100, height: 100, style: "" },
		{ id: "box3", x: 0, y: 100, width: 100, height: 100, style: "" },
		{ id: "box4", x: 100, y: 100, width: 100, height: 100, style: "" },

	];

</script>

<div id="diagram" class=" bg-gray-50 dark:bg-gray-800" style="z-inde : 100">

	
	
	<svg class="absolute top-0 left-0 w-full h-full" style="z-index: 0">
		<path d="M{boxes[0].x} {boxes[0].y} C{boxes[0].x-((boxes[0].x-boxes[1].x))/2} {boxes[0].y} , {boxes[1].x+((boxes[0].x-boxes[1].x))/2} {boxes[1].y}, {boxes[1].x} {boxes[1].y}" stroke="black" fill="none"/>
	</svg>

	{#each boxes as box}

		<!-- create draggable for box and bind x and y to top and left-->
		
		<Draggable bind:left = {box.x} bind:top={box.y}>
			<Box {...box} />
		</Draggable>

	{/each}
</div>

<style>
  #diagram {
	width: 100%;
	height: 100%;
  }
</style>
