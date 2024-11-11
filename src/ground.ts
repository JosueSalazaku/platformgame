
export class Ground {
    position: { x: number; y: number };
    size: {width: number, height: number}
    color: string;

    constructor(x: number, y: number, width: number, height: number, color: string) {
        this.position = { x, y };
        this.size = { width, height }
        this.color = color;
    }
}