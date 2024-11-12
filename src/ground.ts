import { ctx } from "./main";
export class Ground {
    x: number;
    y: number;
    color: string;
    width: number;
    height: number;

    constructor(x: number, y: number, color: string, width: number, height: number) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.width = width;
        this.height = height;
    }

    draw() {
        if (ctx) {
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }

}

export let ground = new Ground(0, 840, "brown", 1800, 60)