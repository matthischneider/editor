<script lang="ts">
	import type { selectState } from '../../components/Selectable';
	import { selectable } from '../../components/Selectable';
	import type { myNode } from './NodeGenerator';
	import { createmyNodeElement } from './NodeGenerator';
	import { makeResizable } from './ResizeDecorator';
	import { onMount } from 'svelte';

	let state: selectState = {
		selected: false,
		selectable: true
	};
</script>

<div use:selectable={state}>Hello</div>
{state.selected}
