//  Area of Square.
function areaOfSquare(x1, y1, x2, y2) {
    let diagonal = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
    return diagonal ** 2 / 2;
}
console.log(areaOfSquare(1, 1, 6, 6));
