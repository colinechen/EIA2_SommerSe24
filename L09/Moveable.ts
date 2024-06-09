namespace classes {
  export class Moveable {
      x: number;
      y: number;
      speed: Vector;
     
      constructor(_x: number, _y: number, _speed: Vector) {
          this.x = _x;
          this.y = _y;
          this.speed = _speed;
      }

      draw(): void {
      }

      move(): void {  
      }
  }
}