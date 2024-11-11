import { ctx } from "./main";
export class Platform {
    position: { x: number; y: number };
    size: {width: number, height: number}
    color: string;
    points: number;

    constructor(x: number, y: number, width: number, height: number, color: string, points: number) {
        this.position = { x, y };
        this.size = { width, height }
        this.color = color;
        this.points = points;
    }
    isCollidingWithPlayer(player: { x: number; y: number; width: number; height: number }): boolean  {
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
}


export function drawPlatform() {
    //  Different tpyes of platforms for differnt levels with different points
    let platforms: Platform[] = [
        new Platform(10, 153, 400, 70, "blue", 0),
        new Platform(420, 440, 400, 70, "green", 10),
        new Platform(840, 0, 400, 70, "red", 20),
        new Platform(1260, 0, 400, 70, "yellow", 30),
        new Platform(1680, 0, 400, 70, "purple", 40)
    ];

    platforms.forEach(platform => {
        ctx.fillStyle = platform.color;
        ctx.fillRect(platform.position.x, platform.position.y, platform.size.width, platform.size.height);
    });
}