import { Point } from "./ParticledBackground.types";

export class Circle {
  pos: Point;
  radius: number;
  color: string;
  active: number;

  constructor(pos: Point, rad: number, color: string) {
    this.pos = pos;
    this.radius = rad;
    this.color = color;
    this.active = 0.2;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 4 * Math.PI, false);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}
