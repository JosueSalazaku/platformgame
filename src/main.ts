
const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

ctx.fillStyle = "purple";
ctx.fillRect(20, 20, 20, 20);



class Player {
   position: number;
   velocity: number;
   movement: string;
  
  constructor (position: number, velocity: number, movement: string) {
    this.position = position;
    this.velocity = velocity;
    this.movement = movement;
  }
}

class Platform {
  position: number;
  height: number;
  width: number;
  material: string;

  constructor(position: number, height: number, width: number, material: string) {
    this.position = position;
    this.height = height;
    this.width = width;
    this.material = material
  }
}

class Obstacles {
  position: number;
  height: number;
  width: number;
  material: string;

  constructor(position: number, height: number, width: number, material: string) {
    this.position = position;
    this.height = height;
    this.width = width;
    this.material = material
  }
}

class Currency {
  position: number;
  value: number;
  color: string;
  material: string;

  constructor (position: number, value: number, color: string, material: string) {
    this.position = position;
    this.value = value;
    this.color = color;
    this.material = material
  }
}


