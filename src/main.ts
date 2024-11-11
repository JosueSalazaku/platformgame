import { drawPlayer, movementPlayer, initializePlayer } from "./player";
import { Ground } from "./ground";
import { Platform } from "./platforms";

export let canvas: HTMLCanvasElement;
export let ctx: CanvasRenderingContext2D;

const platforms: Platform[] = [
    new Platform(10, 153, 400, 70, "blue", 0),
    new Platform(420, 440, 400, 70, "green", 10),
    new Platform(840, 300, 400, 70, "red", 20),
    new Platform(1260, 150, 400, 70, "yellow", 30),
    new Platform(1680, 0, 400, 70, "purple", 40)
];

document.addEventListener('DOMContentLoaded', () => {
    // Initialize canvas and context only after DOM content is loaded
    canvas = document.getElementById("canvas") as HTMLCanvasElement;
    if (!canvas) {
        console.error("Canvas element not found!");
        return;
    }

    ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

    if (!ctx) {
        console.error("Canvas context could not be initialized!");
        return;
    }

    // Initialize player (setting ground level and other properties)
    initializePlayer();

    // Start game loop once everything is properly initialized
    gameLoop();
});

function gameLoop() {
    enviroment();
    movementPlayer();
    drawPlayer();
    drawAllPlatforms()
    drawEnemy();
    movementEnemy();
    requestAnimationFrame(gameLoop);
}

let ground: Ground;

export function enviroment() {
    if (!canvas || !ctx) return; 
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight / 1.4

    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    if (!ground) {
        ground = new Ground(0, canvas.height - 135, canvas.width, 1900, "#ebbb8a"); 
    }
    
    ground.draw(ctx);
    
}

export function drawAllPlatforms() {
    platforms.forEach(platform => platform.draw())
}





export function drawEnemy() {
    // Enemy drawing logic here
}

export function movementEnemy() {
    // Enemy movement logic here
}

// Key state tracking
export let keys = {
    left: false,
    right: false,
    up: false,
    down: false
};

// Event listeners for keyboard controls
document.addEventListener('keydown', (event) => {
    if (event.key === "ArrowLeft") {
        keys.left = true;
    } else if (event.key === "ArrowRight") {
        keys.right = true;
    } else if (event.key === "ArrowUp" || event.key === " ") {
        keys.up = true;
    }
});

document.addEventListener('keyup', (event) => {
    if (event.key === "ArrowLeft") {
      keys.left = false;
    } else if (event.key === "ArrowRight") {
      keys.right = false;
    } else if (event.key === "ArrowUp" || event.key === " ") {
      keys.up = false;
    }
});
