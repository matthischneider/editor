<script lang="ts">
	export let left:number = 100;
	export let top:number = 100;
	
	let moving = false;
	
	function onMouseDown() {
		moving = true;
	}
	
	function onMouseMove(e: MouseEvent) {
		if (moving) {
			left += e.movementX;
			top += e.movementY;
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

<svg on:mousedown={onMouseDown} x={left}px y={top}px>
	<slot></slot>
</svg>

<svelte:window on:mouseup={onMouseUp} on:mousemove={onMouseMove} />