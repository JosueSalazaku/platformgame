import type { Player } from './../types'
const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

// Game world variables
// let gravity = 0.5;
// let groundLevel = canvas.height - 50;



export let player: Player = {
    x: 10, // Initial x position
    y: 550, // Initial y position
    color: "purple",
    width: 40,
    height: 40,
    velocityX: 0, // Horizontal velocity
    velocityY: 0, // Vertical velocity (for jumping) 
    isJumping: false, // Track if player is in mid-air
};
  
function gameLoop() {
    movementPlayer()
    enviroment()
    drawPlayer()
    drawPlatform()
    drawEnemy()
    movementPlayer()
    movementEnemy()
    requestAnimationFrame(gameLoop)
}

export function enviroment() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    ctx.fillStyle = "#242424";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}
  
export function drawPlayer() {
    //fillRect(x axis, y axis, width, height)
    ctx.fillStyle = player.color;
    ctx.fillRect(player.x, player.y, player.width, player.height)
    player.x += player.velocityX;
    player.y += player.velocityY;
}

export function drawPlatform() {

}

export function drawEnemy() {

}

export function movementPlayer() {
    if (keys.left) {
        player.x -= 5
    }

    if (keys.right) {
        player.x += 5
    }

    if (keys.up && !player.isJumping) {
        player.velocityY = -10;
        player.isJumping = true;
    }
}

export function movementEnemy() {

}


let keys = {
    left: false,
    right: false,
    up: false,
    down: false
};

document.addEventListener('keydown', (event) => {
    // all movement logics
    if (event.key === "ArrowLeft") {
        keys.left = true;
    } else if (event.key === "ArrowRight") {
        keys.right = true;
    } else if (event.key === "ArrowUp" || event.key === " ") {
        keys.up = true;
    }
})

document.addEventListener('keyup', (event) => {
    // To stop moving 
    if (event.key === "ArrowLeft") {
      keys.left = false; 
    } else if (event.key === "ArrowRight") {
      keys.right = false;
    } else if (event.key === "ArrowUp" || event.key === " ") {
      keys.up = false;
    }
  });



gameLoop()

