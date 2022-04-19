var Circle = /** @class */ (function () {
    function Circle(canvasWidth, canvasHeight, radius, speed) {
        this.radius = radius;
        this.speed = speed;
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.vx = this.speed * Math.random() * 2 - 1;
        this.vy = this.speed * Math.random() * 2 - 1;
        var r2 = this.radius * 2;
        this.initX = Math.random() * (canvasWidth - 2 * r2) + r2;
        this.initY = Math.random() * (canvasHeight - 2 * r2) + r2;
    }
    Circle.prototype.draw = function (ctx, canvasWidth, canvasHeight) {
        this.initX += this.vx;
        this.initY += this.vy;
        this.bounce(canvasWidth, canvasHeight);
        ctx.fillStyle = "black";
        ctx.beginPath();
        ctx.arc(this.initX, this.initY, this.radius, 0, 2 * Math.PI);
        ctx.fill();
    };
    Circle.prototype.bounce = function (canvasWidth, canvasHeight) {
        var minX = this.radius;
        var maxX = canvasWidth - this.radius;
        var minY = this.radius;
        var maxY = canvasHeight - this.radius;
        if (this.initX <= minX || this.initX >= maxX) {
            this.vx *= -1;
            this.initX += this.vx;
        }
        else if (this.initY <= minY || this.initY >= maxY) {
            this.vy *= -1;
            this.initY += this.vy;
        }
    };
    return Circle;
}());
export { Circle };
