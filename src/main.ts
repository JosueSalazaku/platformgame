import { Hero } from "./player"
import { platforms } from "./platforms";
import { ground } from "./ground";

const canvas = document.getElementById("canvas") as HTMLCanvasElement
export const ctx = canvas.getContext("2d")
ctx?.canvas;

canvas.width = 1700
canvas.height = 900




function gameLoop() {
    environment()

}

function environment() {
    //clear canvas
    ctx?.clearRect(0, 0, canvas.width, canvas.height)

    Hero.draw();
    ground.draw();
    //platform
    for (let i = 0; i < platforms.length; ++i) {
        platforms[i].draw()
    }
}

gameLoop()

let keys = {
    left: false,
    right: false,
    up: false,
}

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
    console.log(event.code);
})

//ArrowRight, ArrowLeft, ArrowUp, ArrowDown