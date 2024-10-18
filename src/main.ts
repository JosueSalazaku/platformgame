import { drawPlayer, movementPlayer, initializePlayer } from "./player";

export let canvas: HTMLCanvasElement;
export let ctx: CanvasRenderingContext2D;

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
    drawPlatform();
    drawEnemy();
    movementEnemy();
    requestAnimationFrame(gameLoop);
}

export function enviroment() {
    if (!canvas || !ctx) return; // Check if canvas and context are initialized

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const groundLevel = canvas.height - 50;
    const gravity = 0.5;

    ctx.fillStyle = "#242424";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

export function drawPlatform() {
    // Platform drawing logic here
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
