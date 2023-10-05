import type { Node } from './Node';

interface Connection {
    source: Node;
    target: Node;
    selected: boolean;
    style: string;
    id: string;
}
export type { Connection };