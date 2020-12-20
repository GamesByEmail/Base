import { IHexSize } from "../interfaces/i-hex-size";
import { Point2D, IPoint2D, Rectangle2D, isIPoint2D } from "@packageforge/geometry2d";
import { BaseGridTerritory } from "../../public-api";

export class HexHelper {
  static extrapolateHexSides(side: number, ...sides: number[]): number[]
  static extrapolateHexSides(sidesIn: number[]): number[]
  static extrapolateHexSides(sidesIn: number | number[]): number[] {
    if (typeof (sidesIn) === "number")
      return this.extrapolateHexSides(<number[]><any>arguments);
    const sidesOut: number[] = [];
    if (sidesIn.length >= 4) {
      sidesOut[4] = sidesIn[0] + sidesIn[1] - sidesIn[3];
      sidesOut[5] = sidesIn[1] + sidesIn[2] - sidesOut[4];
      if (sidesIn.length >= 5 && sidesIn[4] !== sidesOut[4])
        throw ("Side 5 must be '" + sidesOut[4] + "' but specified as " + sidesIn[4]);
      if (sidesIn.length === 6 && sidesIn[5] !== sidesOut[5])
        throw ("Side 6 must be '" + sidesOut[5] + "' but specified as " + sidesIn[5]);
      for (let i = 0; i < 4; i++)
        sidesOut[i] = sidesIn[i];
    } else
      for (let j = 0; j < 6; j++)
        sidesOut[j] = sidesIn[j % sidesIn.length];
    return sidesOut;
  }
  static pointsToPolygon(...points: IPoint2D[]): string
  static pointsToPolygon(points: IPoint2D[]): string
  static pointsToPolygon(points: IPoint2D | IPoint2D[]): string {
    if (isIPoint2D(points))
      return this.pointsToPolygon(<any>arguments);
    const coords: number[] = [];
    for (let i = 0; i < points.length; i++)
      coords.push(points[i].x, points[i].y);
    return coords.join(" ");
  }
  static extrapolateHexSize(size: number): IHexSize {
    const angle = 30 / 180 * Math.PI;
    const adjacent = size / 2;
    const opposite = Math.tan(angle) * adjacent;
    const hypotenuse = Math.sqrt((adjacent * adjacent) + (opposite * opposite));
    const offsetX = new Point2D(size, 0);
    const offsetY = new Point2D(-adjacent, -hypotenuse - opposite);
    const points = [
      new Point2D(0, -hypotenuse),
      new Point2D(adjacent, -opposite),
      new Point2D(adjacent, opposite),
      new Point2D(0, hypotenuse),
      new Point2D(-adjacent, opposite),
      new Point2D(-adjacent, -opposite)
    ];
    return {
      size: size,
      offsetX: offsetX,
      offsetY: offsetY,
      points: points,
      polygon: this.pointsToPolygon(points),
      edges: [
        this.pointsToPolygon(points[2], points[3], points[3].clone().add(offsetX)),
        this.pointsToPolygon(points[1], points[2], points[0].clone().add(offsetX)),
        this.pointsToPolygon(points[0], points[1], points[1].clone().add(offsetY)),
        this.pointsToPolygon(points[5], points[0], points[0].clone().subtract(offsetX)),
        this.pointsToPolygon(points[4], points[5], points[3].clone().subtract(offsetX)),
        this.pointsToPolygon(points[3], points[4], points[4].clone().subtract(offsetY))
      ],
      caps: [
        { p1: points[4], p2: points[3] },
        { p1: points[3], p2: points[2] },
        { p1: points[2], p2: points[1] },
        { p1: points[1], p2: points[0] },
        { p1: points[0], p2: points[5] },
        { p1: points[5], p2: points[4] }
      ]
    };
  }
  static getHexOffset(size: IHexSize, position: IPoint2D): Point2D {
    return size.offsetX.clone().scale(position.x).add(size.offsetY.clone().scale(position.y));
  }
  static getHexViewBox(size: IHexSize, rotation: number, territories: BaseGridTerritory<any, any, any, any, any, any, any, any, any, any, any, any, any>[]): Rectangle2D {
    let gotFirst = false;
    let xLow = 0, yLow = 0, xHigh = 0, yHigh = 0;
    const radians = rotation / 180 * Math.PI;
    territories.forEach(territory => {
      const offset = this.getHexOffset(size, territory.position);
      size.points.forEach(point => {
        const p = point.clone().add(offset).rotate(radians);
        if (!gotFirst) {
          xLow = xHigh = p.x;
          yLow = yHigh = p.y;
          gotFirst = true;
        } else {
          if (p.x < xLow)
            xLow = p.x;
          if (p.y < yLow)
            yLow = p.y;
          if (p.x > xHigh)
            xHigh = p.x;
          if (p.y > yHigh)
            yHigh = p.y;
        }
      });
    });
    return new Rectangle2D(xLow, yLow, xHigh - xLow + 1, yHigh - yLow + 1);
  }
  static getHexCount(sides: number[]) {
    let count = 0;
    const highY = sides[1] + sides[2] - 2;
    let width = sides[0];
    for (let y = 0; y <= highY; y++) {
      count += width;
      if (y < sides[1] - 1)
        width++;
      if (y >= sides[5] - 1)
        width--;
    }
    return count;
  }
  static getHexPositionFromIndex(index: number, sides: number[]): Point2D {
    let i = index;
    const highY = sides[1] + sides[2] - 2;
    let width = sides[0];
    let xBase = 0;
    for (let y = 0; y <= highY; y++) {
      if (i < width)
        return new Point2D(xBase + i, y);
      i -= width;
      if (y < sides[1] - 1)
        width++;
      if (y >= sides[5] - 1) {
        xBase++
        width--;
      }
    }
    throw ("index out of range for hex size: " + index + " [" + sides.join() + "]");
  }
  static calculateAdjacents(territories: BaseGridTerritory<any, any, any, any, any, any, any, any, any, any, any, any, any>[]) {
    territories.forEach(territory => {
      this.calculateAdjacent(territory, territories, 0, 0, -1);
      this.calculateAdjacent(territory, territories, 1, 1, 0);
      this.calculateAdjacent(territory, territories, 2, 1, 1);
      this.calculateAdjacent(territory, territories, 3, 0, 1);
      this.calculateAdjacent(territory, territories, 4, -1, 0);
      this.calculateAdjacent(territory, territories, 5, -1, -1);
    });
  }
  static calculateAdjacent(territory: BaseGridTerritory<any, any, any, any, any, any, any, any, any, any, any, any, any>, territories: BaseGridTerritory<any, any, any, any, any, any, any, any, any, any, any, any, any>[], direction: number, xOffset: 1 | 0 | -1, yOffset: 1 | 0 | -1) {
    if (territory.adjacents[direction] === undefined) {
      const other = this.findTerritory(territories, territory.position.x + xOffset, territory.position.y + yOffset);
      territory.adjacents[direction] = other;
      if (other)
        other.adjacents[(direction + 3) % 6] = territory;
    }
  }
  static getOverlayPolygon(size: IHexSize, territories: BaseGridTerritory<any, any, any, any, any, any, any, any, any, any, any, any, any>[], all?: boolean): string {
    const ts = <any[]>territories;
    let first: number;
    for (let i = 0; i < territories.length; i++)
      if (!territories[i].adjacents[0] && !territories[i].adjacents[4] && !territories[i].adjacents[5]) {
        first = i;
        break;
      }
    if (typeof (first!) !== "number")
      throw ("Cound not find lower left corner");
    const points: Point2D[] = [];
    let direction = 0;
    let territory = territories[first];
    let offset = this.getHexOffset(size, territory.position);
    do {
      points.push(size.points[(10 - direction) % 6].clone().add(offset));
      const concave = (direction + 5) % 6;
      if (territory.adjacents[concave])
        direction = concave;
      if (territory.adjacents[direction]) {
        if (direction !== concave && all)
          points.push(size.points[(9 - direction) % 6].clone().add(offset));
        territory = territory.adjacents[direction];
        offset = this.getHexOffset(size, territory.position);
      } else
        direction = (direction + 1) % 6;
    } while (direction !== 0 || territory.index !== first);
    return this.pointsToPolygon(points);
  }
  static findTerritory(territories: BaseGridTerritory<any, any, any, any, any, any, any, any, any, any, any, any, any>[], x: number, y: number) {
    for (let i = 0; i < territories.length; i++)
      if (territories[i].position.x === x && territories[i].position.y === y)
        return territories[i];
    return;
  }
}