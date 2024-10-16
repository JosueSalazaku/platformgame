
const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

ctx.fillStyle = "purple";
ctx.fillRect(20, 20, 20, 20);


console.log(ctx.fillStyle)