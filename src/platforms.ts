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
}

export function drawPlatform() {

    let platforms: Platform[] = [
        new Platform(10, 153, 400, 70, "blue", 0),
        new Platform(420, 240, 400, 70, "green", 10),
        new Platform(840, 0, 400, 70, "red", 20),
        new Platform(1260, 0, 400, 70, "yellow", 30),
        new Platform(1680, 0, 400, 70, "purple", 40)
    ];

    platforms.forEach(platform => {
        ctx.fillStyle = platform.color;
        ctx.fillRect(platform.position.x, platform.position.y, platform.size.width, platform.size.height);
    });
}