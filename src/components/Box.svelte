<script lang="ts">
    import type { Shape } from './Geometry';
    export let box: Shape;
	let moving = false;
	
	function onMouseDown() {
		moving = true;
	}
	
	function onMouseMove(e: MouseEvent) {
		if (moving) {
			box.location.x += e.movementX;
			box.location.y += e.movementY;
		}
	}
	
	function onMouseUp() {
		moving = false;
	}
	
// 	$: console.log(moving);
</script>

<style>
	.draggable {
		user-select: none;
		cursor: move;
		position: absolute;
	}
</style>

<svg on:mousedown={onMouseDown} 
    x={box.location.x}px 
    y={box.location.y}px 
    width={box.width+4} 
    height={box.height+4} 
    class="dark:text-gray-900 text-white fill-current dark:stroke-white stroke-gray-900 draggable">
	<rect x=2 y=2 width={box.width} height={box.height} rx="10" ry="10" class=" stroke-2" />
    {#if (box.title)}
        <text class="font-sans font-medium text-gray-900 dark:text-white fill-current stroke-none" x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" >{box.title}</text> 
    {/if}   
</svg>

<svelte:window on:mouseup={onMouseUp} on:mousemove={onMouseMove} />
<!--rect x=2 y=2 rx="10" ry="10" width="100" height="50" class="dark:text-gray-900 text-white fill-current dark:stroke-white stroke-gray-900 stroke-2" /-->
  
