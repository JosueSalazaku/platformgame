import { Hero } from "./player"
import { platforms } from "./platforms"
import { ground } from "./ground"

const canvas = document.getElementById("canvas") as HTMLCanvasElement;
export const ctx = canvas.getContext("2d");
ctx?.canvas;

canvas.width = 1700;
canvas.height = 900;
export let gravitiy = 0.5;
export let heroSpeed = 5;
export let heroJump = -5;
export let groundPositionY = 800

let keys = {
    left: false,
    right: false,
    up: false,
}

function gameLoop() {
    environment()

}

function environment() {
    Hero.velocityY += gravitiy;
    Hero.y += Hero.velocityY;

    if (Hero) {
        groundPositionY
    }

    heroMovement()
    //clear canvas
    ctx?.clearRect(0, 0, canvas.width, canvas.height)

    Hero.draw();
    ground.draw();
    //platform
    for (let i = 0; i < platforms.length; ++i) {
        platforms[i].draw()
    }
}

function heroMovement() {
    if (Hero) {
        if (keys.left) {
            Hero.velocityX = -heroSpeed;
        } else if (keys.right) {
            Hero.velocityX = heroSpeed;
        } else {
            Hero.velocityX = 0;
        }

        if (keys.up && !Hero.isJumping) {
            Hero.velocityY = heroJump
            Hero.isJumping = true
        }
    }
}

gameLoop()



window.addEventListener("keydown", (event) => {
    if (event.code === "ArrowLeft") {
        keys.left = true;
    }
    if (event.code === "ArrowRight") {
        keys.right = true;
    }
    if (event.code === "ArrowUp" || event.code === "Space") {
        keys.up = true;
    }     
    console.log(event.code);    
})

window.addEventListener("keyup", (event) => {
    if (event.code === "ArrowLeft") {
        keys.left = false;
    }
    if (event.code === "ArrowRight") {
        keys.right = false;
    }
    if (event.code === "ArrowUp" || event.code === "Space") {
        keys.up = false;
    }   
})