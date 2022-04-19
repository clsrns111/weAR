export class Circle {
  speed: number;
  private canvasWidth: number;
  private canvasHeight: number;
  radius: number;
  initX: number;
  initY: number;
  vx: number;
  vy: number;

  constructor(
    canvasWidth: number,
    canvasHeight: number,
    radius: number,
    speed: number
  ) {
    this.radius = radius;
    this.speed = speed;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.vx = this.speed * Math.random() * 2 - 1;
    this.vy = this.speed * Math.random() * 2 - 1;

    const r2 = this.radius * 2;

    this.initX = Math.random() * (canvasWidth - 2 * r2) + r2;
    this.initY = Math.random() * (canvasHeight - 2 * r2) + r2;
  }

  draw(
    ctx: CanvasRenderingContext2D,
    canvasWidth: number,
    canvasHeight: number
  ) {
    this.initX += this.vx;
    this.initY += this.vy;
    this.bounce(canvasWidth, canvasHeight);

    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(this.initX, this.initY, this.radius, 0, 2 * Math.PI);
    ctx.fill();
  }

  bounce(canvasWidth: number, canvasHeight: number) {
    const minX = this.radius;
    const maxX = canvasWidth - this.radius;
    const minY = this.radius;
    const maxY = canvasHeight - this.radius;

    if (this.initX <= minX || this.initX >= maxX) {
      this.vx *= -1;
      this.initX += this.vx;
    } else if (this.initY <= minY || this.initY >= maxY) {
      this.vy *= -1;
      this.initY += this.vy;
    }
  }
}
