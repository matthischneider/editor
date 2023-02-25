<script lang="ts">
	import { files } from '../stores';
	let hovering: number | null;
	let start: number = 0;
	let target: number = 0;
	export let activeFile: number = 0;

	const drop = (event: DragEvent, target: number) => {
		const newFileList = $files;
		console.log('drop', start, target);
		if (start < target) {
			newFileList.splice(target + 1, 0, newFileList[start]);
			newFileList.splice(start, 1);
		} else {
			newFileList.splice(target, 0, newFileList[start]);
			newFileList.splice(start + 1, 1);
		}
		$files = newFileList;
		hovering = null;
		activeFile = target;
	};

	const dragstart = (event: DragEvent, startIndex: number) => {
		if (event.dataTransfer !== null) {
			console.log('dragstart', startIndex);
			start = startIndex;
		}
	};

	const dragover = (event: DragEvent, hoveringIndex: number) => {
		hovering = hoveringIndex;
	};

	const dragenter = (event: DragEvent, hoveringIndex: number) => {
		hovering = hoveringIndex;
	};
</script>

<div
	class="h-12 flex flex-row overflow-x-auto space-x-1 px-2 border-b border-gray-100 dark:border-gray-700 "
>
	{#each $files as file, index}
		<button
			draggable={true}
			on:dragstart={(event) => dragstart(event, index)}
			on:drop|preventDefault={(event) => drop(event, index)}
			on:dragover|preventDefault={(event) => dragover(event, index)}
			on:dragenter|preventDefault={(event) => dragenter(event, index)}
			on:click={(event) => (activeFile = index)}
			class="flex items-center px-2 text-lg  hover:bg-gray-100 dark:hover:bg-gray-700 
				{activeFile == index ? ' dark:bg-gray-700 bg-gray-100  text-gray-900 dark:text-white' : ' '}">
			{file.name}
		</button>
	{/each}
</div>
