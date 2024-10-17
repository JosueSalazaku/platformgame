export class Player {
    position: number;
    velocity: number;
    movement: string;
   
   constructor (position: number, velocity: number, movement: string) {
     this.position = position;
     this.velocity = velocity;
     this.movement = movement;
   }
}
 
export class Enemy {
    position: number;
    height: number;
    width: number;
    type: string;

    constructor(position: number, height: number, width: number, type: string) {
        this.position = position;
        this.height = height;
        this.width = width;
        this.type = type
    }
}
 
export  class Platform {
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
 
export class Obstacles {
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
 
export class Currency {
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