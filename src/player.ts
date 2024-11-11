import { canvas, ctx } from "./main";
import { keys } from "./main";

// Player object and variables
let groundLevel: number;
let gravity = 0.5; 

export let player = {
    x: 10, // Initial x position
    y: 2, // Initial y position, will be updated based on ground level
    color: "purple",
    width: 40,
    height: 40,
    velocityX: 0, // Horizontal velocity
    velocityY: 0, // Vertical velocity (for jumping) 
    isJumping: false, // Track if player is in mid-air
};

// Initialize player properties based on canvas height
export function initializePlayer() {
    if (!canvas) {
        console.error("Canvas is not initialized!");
        return;
    }
    groundLevel = canvas.height - -40;  // Set the ground level based on canvas height
    player.y = groundLevel - player.height; // Set the initial y position of the player
}

export function drawPlayer() {
    if (!ctx) return; // Ensure ctx is initialized

    ctx.fillStyle = player.color;
    ctx.fillRect(player.x, player.y, player.width, player.height);

    // Update player's position based on velocity
    player.x += player.velocityX;
    player.y += player.velocityY;
}

export function movementPlayer() {
    if (keys.left) {
        player.x -= 5;
    }
    if (keys.right) {
        player.x += 5;
    }
    // Jumping logic
    if (keys.up && !player.isJumping) {
        player.velocityY = -12; // Apply jump velocity (negative to move up)
        player.isJumping = true;
    }

    player.velocityY += gravity;
    player.y += player.velocityY;

    // Handle collision with the ground
    if (player.y + player.height >= groundLevel) {
        player.y = groundLevel - player.height;  // Keep the player on the ground
        player.velocityY = 0;                    // Stop downward movement
        player.isJumping = false;                // Reset jump state
    }
}

