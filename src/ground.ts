
export class Ground {
    position: { x: number; y: number };
    size: {width: number, height: number}
    color: string;

    constructor(x: number, y: number, width: number, height: number, color: string) {
        this.position = { x, y };
        this.size = { width, height }
        this.color = color;
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this.color
        ctx.fillRect(this.position.x, this.position.y, this.size.height, this.size.width)
    }
}
