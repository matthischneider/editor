import { type myNode, createmyNodeElement } from './NodeGenerator';

export interface Resizable {
	resizeHandles: HTMLElement[];
}

export function makeResizable(element: HTMLElement): HTMLElement & Resizable {
	const handles = [
		createHandle(element, 'nw-resize'),
		createHandle(element, 'ne-resize'),
		createHandle(element, 'sw-resize'),
		createHandle(element, 'se-resize')
	];

	return Object.assign(element, { resizeHandles: handles });
}

function createHandle(parent: HTMLElement, cursor: string): HTMLElement {
	const handle = document.createElement('div');
	handle.style.position = 'absolute';
	handle.style.width = '10px';
	handle.style.height = '10px';
	handle.style.background = 'white';
	handle.style.border = '1px solid black';
	handle.style.cursor = cursor;

	switch (cursor) {
		case 'nw-resize':
			handle.style.top = '-5px';
			handle.style.left = '-5px';
			break;
		case 'ne-resize':
			handle.style.top = '-5px';
			handle.style.right = '-5px';
			break;
		case 'sw-resize':
			handle.style.bottom = '-5px';
			handle.style.left = '-5px';
			break;
		case 'se-resize':
			handle.style.bottom = '-5px';
			handle.style.right = '-5px';
			break;
	}
	parent.appendChild(handle);
	handle.addEventListener('mousedown', (event) => {
		event.preventDefault();
		const startX = event.clientX;
		const startY = event.clientY;
		const startWidth = parent.offsetWidth;
		const startHeight = parent.offsetHeight;

		function handleMouseMove(event: MouseEvent) {
			const deltaX = event.clientX - startX;
			const deltaY = event.clientY - startY;
			parent.style.width = `${startWidth + deltaX}px`;
			parent.style.height = `${startHeight + deltaY}px`;
		}

		function handleMouseUp() {
			document.removeEventListener('mousemove', handleMouseMove);
			document.removeEventListener('mouseup', handleMouseUp);
		}

		document.addEventListener('mousemove', handleMouseMove);
		document.addEventListener('mouseup', handleMouseUp);
	});
	return handle;
}
