import { ctx } from "./main";

export class Platform {
    x: number;
    y: number;
    color: string;
    width: number;
    height: number;

    constructor(x: number, y: number, color: string, width: number, height: number) {
        this.x = x
        this.y = y
        this.color = color
        this.width = width
        this.height = height
    }
    draw() {
        if (ctx) {
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
}

export let platforms: Platform[] = [
    new Platform(0, 12, "green", 210, 100),
    new Platform(120, 12, "red", 210, 100),
    new Platform(240, 12, "Yellow", 210, 100),
    new Platform(460, 12, "blue", 210, 100),
    new Platform(580, 12, "rose", 210, 100),
]
