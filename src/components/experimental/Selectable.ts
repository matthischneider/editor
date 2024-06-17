import type { Action } from '@sveltejs/kit';
export function selectable(node: HTMLElement, state: selectState) {
	function handleClick() {
		state.selected = !state.selected;
		console.log('click ' + state.selected);
	}

	function handleKeyDown(event: KeyboardEvent) {
		state.selected = !state.selected;
		if (event.key === 'Enter' || event.key === ' ') {
		}
	}
	node.addEventListener('keydown', handleKeyDown);
	node.addEventListener('click', handleClick);
	return {
		update(newState: selectState) {
			state = newState;
		},
		destroy() {
			node.removeEventListener('click', handleClick);
			node.removeEventListener('keydown', handleKeyDown);
		}
	};
}

export type selectState = {
	selected: boolean;
	selectable: boolean;
};
