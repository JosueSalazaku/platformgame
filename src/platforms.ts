import { ctx } from "./main";

export class Platform {
    position: { x: number; y: number };
    size: { width: number; height: number };
    color: string;
    points: number;

    constructor(x: number, y: number, width: number, height: number, color: string, points: number) {
        this.position = { x, y };
        this.size = { width, height };
        this.color = color;
        this.points = points;
    }

    isCollidingWithPlayer(player: { x: number; y: number; width: number; height: number }): boolean {
        const playerBottom = player.y + player.height;
        const playerTop = player.y;
        const playerRight = player.x + player.width;
        const playerLeft = player.x;

        const platformTop = this.position.y;
        const platformBottom = this.position.y + this.size.height;
        const platformRight = this.position.x + this.size.width;
        const platformLeft = this.position.x;

        return playerBottom > platformTop &&
               playerTop < platformBottom &&
               playerRight > platformLeft &&
               playerLeft < platformRight;
    }

    // Add draw method to render the platform
    draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.fillRect(this.position.x, this.position.y, this.size.width, this.size.height);
    }
}
