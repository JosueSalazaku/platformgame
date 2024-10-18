export interface Player {
    x: number;
    y: number;
    color: string;
    width: number;
    height: number;
    velocityX: number;
    velocityY: number;
    isJumping: boolean;
}

interface Enemy {
    x: number;
    y: number;
    color: string;
    width: number;
    height: number;
    velocityX: number;
    velocityY: number;
    isJumping: boolean;
}