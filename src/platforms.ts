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
    new Platform(320, 700, "red", 210, 50),
    new Platform(600, 445, "Yellow", 210, 50),
    new Platform(560, 12, "blue", 210, 50),
    new Platform(680, 12, "purple", 210, 50),
]