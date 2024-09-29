import { Circle } from "./ParticledBackground.util";

export interface Point {
  x: number;
  y: number;
  originX: number;
  originY: number;
  closest?: Point[];
  circle?: Circle;
}
