import { Point2D } from "@packageforge/geometry2d";

export interface IHexSize {
  size: number;
  offsetX: Point2D;
  offsetY: Point2D
  points: Point2D[];
  polygon: string;
  edges: string[];
  caps:{
    p1:Point2D,
    p2:Point2D
  }[];
};
