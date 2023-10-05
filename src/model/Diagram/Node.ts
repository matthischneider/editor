import type { Vector } from "../Geometry/Vector";
interface Node{
    id: string;
    content: string;
    location: Vector;
    width: number;
    height: number;
    style: string;
    selected: boolean;
}

export type { Node };