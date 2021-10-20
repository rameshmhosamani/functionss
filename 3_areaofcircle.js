// area of circle
function areaOfCircle(radius) {
    this.radius = radius;
    this.area = function () {
        return Math.PI * this.radius * this.radius;
    };
}
var c = new areaOfCircle(4);
console.log('area =', c.area().toFixed(2));