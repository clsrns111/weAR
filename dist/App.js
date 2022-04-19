import { Circle } from "./Circle.js";
var App = /** @class */ (function () {
    function App() {
        this.canvas = document.createElement("canvas");
        this.ctx = this.canvas.getContext("2d");
        document.querySelector(".canvas").appendChild(this.canvas);
        this.canvasWidth = this.canvas.clientWidth;
        this.canvasHeight = this.canvas.clientHeight;
        this.canvas.width = this.canvasWidth * 2;
        this.canvas.height = this.canvasHeight * 2;
        this.ctx.scale(2, 2);
        this.circles = [];
        this.draw();
        window.requestAnimationFrame(this.animate.bind(this));
    }
    App.prototype.animate = function () {
        var _this = this;
        this.bounce();
        window.requestAnimationFrame(this.animate.bind(this));
        this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
        this.circles.map(function (circle) {
            return circle.draw(_this.ctx, _this.canvasWidth, _this.canvasHeight);
        });
    };
    App.prototype.draw = function () {
        for (var i = 0; i < Math.floor(Math.random() * 10 + 10); i++) {
            var circle = new Circle(this.canvasWidth, this.canvasHeight, Math.floor(Math.random() * 10 + 10), Math.floor(Math.random() * 3 + 3));
            this.circles.push(circle);
        }
    };
    App.prototype.bounce = function () {
        for (var i = 0; i < this.circles.length; i++) {
            for (var j = i + 1; j < this.circles.length; j++) {
                var c1 = this.circles[i];
                var c2 = this.circles[j];
                var dx = c2.initX - c1.initX;
                var dy = c2.initY - c1.initY;
                var distance = Math.sqrt(Math.pow((c1.initX - c2.initX), 2) + Math.pow((c1.initY - c2.initY), 2));
                if (distance < c1.radius + c2.radius) {
                    var angle = Math.atan2(dy, dx);
                    c1.vx -= Math.cos(angle);
                    c1.vy -= Math.sin(angle);
                    c2.vx += Math.cos(angle);
                    c2.vy += Math.sin(angle);
                }
            }
        }
    };
    return App;
}());
window.onload = function () { return new App(); };
