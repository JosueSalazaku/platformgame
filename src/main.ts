
const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

ctx.fillStyle = "purple";
ctx.fillRect(10, 10, 10, 10);


console.log(ctx.fillStyle)