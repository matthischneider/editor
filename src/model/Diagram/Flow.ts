import type { Node } from './Node';
import type { Connection } from './Connection';


interface Flow {
    id: string;
    name: string;
    description: string;
    nodes: Node[];
    connections: Connection[];
}

export type { Flow };