import { Hero } from "./player"
import { platforms } from "./platforms";

const canvas = document.getElementById("canvas") as HTMLCanvasElement
export const ctx = canvas.getContext("2d")
ctx?.canvas;

canvas.width = 1700
canvas.height = 900




function gameLoop() {
    environment()

}

function environment() {
    Hero.draw();
    
    //platform
    for (let i = 0; i < platforms.length; ++i) {
        platforms[i].draw()
    }
}

gameLoop()