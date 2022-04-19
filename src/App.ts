import { Circle } from "./Circle.js";

class App {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  circles: Circle[];
  canvasWidth: number;
  canvasHeight: number;
  constructor() {
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d")!;
    document.querySelector(".canvas")!.appendChild(this.canvas);

    this.canvasWidth = this.canvas.clientWidth;
    this.canvasHeight = this.canvas.clientHeight;

    this.canvas.width = this.canvasWidth * 2;
    this.canvas.height = this.canvasHeight * 2;
    this.ctx.scale(2, 2);

    this.circles = [];

    this.draw();

    window.requestAnimationFrame(this.animate.bind(this));
  }

  animate() {
    this.bounce();
    window.requestAnimationFrame(this.animate.bind(this));

    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);

    this.circles.map((circle) =>
      circle.draw(this.ctx, this.canvasWidth, this.canvasHeight)
    );
  }

  draw() {
    for (let i = 0; i < Math.floor(Math.random() * 10 + 10); i++) {
      const circle = new Circle(
        this.canvasWidth,
        this.canvasHeight,
        Math.floor(Math.random() * 10 + 10),
        Math.floor(Math.random() * 3 + 3)
      );
      this.circles.push(circle);
    }
  }

  bounce() {
    for (let i = 0; i < this.circles.length; i++) {
      for (let j = i + 1; j < this.circles.length; j++) {
        let c1 = this.circles[i];
        let c2 = this.circles[j];

        let dx = c2.initX - c1.initX;
        let dy = c2.initY - c1.initY;

        let distance = Math.sqrt(
          (c1.initX - c2.initX) ** 2 + (c1.initY - c2.initY) ** 2
        );

        if (distance < c1.radius + c2.radius) {
          let angle = Math.atan2(dy, dx);

          c1.vx -= Math.cos(angle);
          c1.vy -= Math.sin(angle);
          c2.vx += Math.cos(angle);
          c2.vy += Math.sin(angle);
        }
      }
    }
  }
}

window.onload = () => new App();
