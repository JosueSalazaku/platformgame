import { ctx } from "./main";

// x: 0,
// y: 12,
// color: "purple",
// width: 40,
// height: 40,
// velocityX: 0,
// velocityY: 0,
// isJumping: false,

export class Player {
    x: number;
    y: number;
    color: string;
    width: number;
    height: number;
    velocityX: number;
    velocityY: number;
    isJumping: boolean;

    constructor(x: number, y: number, color: string, width: number, height: number, velocityX: number, velocityY: number, isJumping: boolean) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.width = width;
        this.height = height;
        this.velocityX = velocityX;
        this.velocityY = velocityY;
        this.isJumping = isJumping;
    }

    draw() {
        if (ctx) {
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
    
}

export let Hero = new Player(0, 800, "purple", 40, 40, 0, 0, false)