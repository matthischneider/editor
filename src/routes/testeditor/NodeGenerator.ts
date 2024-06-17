export interface myNode {
	type: 'div';
	children?: myNode[];
	width?: number;
	height?: number;
}

export function createmyNodeElement(node: myNode): HTMLElement {
	const element = document.createElement('div');
	element.style.width = `${node.width ?? 100}px`;
	element.style.height = `${node.height ?? 100}px`;
	element.style.border = '1px solid black';

	if (node.children) {
		for (const child of node.children) {
			const childElement = createmyNodeElement(child);
			element.appendChild(childElement);
		}
	}

	return element;
}
