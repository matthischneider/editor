export class Vector {
    constructor(public x: number, public y: number) {
        this.x = x;
        this.y = y;
    }
    public add(v: Vector): Vector {
        return new Vector(this.x + v.x, this.y + v.y);
    }
    public subtract(v: Vector): Vector {
        return new Vector(this.x - v.x, this.y - v.y);
    }
    public multiply(scalar: number): Vector {
        return new Vector(this.x * scalar, this.y * scalar);
    }
    public divide(scalar: number): Vector {
        return new Vector(this.x / scalar, this.y / scalar);
    }
    public getAngle(): number {
        return Math.atan2(this.y, this.x)*180/Math.PI;
    }
}



export class Shape {
    constructor(public location: Vector, public width: number, public height: number, public id?: string, public style?: string) {
        this.location = location;
        this.width = width;
        this.height = height;
        this.id = id;
        this.style = style;
    }
}

