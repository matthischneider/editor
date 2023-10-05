import type { Vector } from "./Vector";
export class Shape {
    constructor(public location: Vector, public width: number, public height: number, public id?: string, public style?: string, public selected?: boolean, public title?: string,) {
        this.location = location;
        this.width = width;
        this.height = height;
        this.id = id;
        this.style = style;
        this.selected = selected;
        this.title = title;
    }
}
