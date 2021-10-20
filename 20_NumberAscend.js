// Given number of ascending order.
function ascendingOrder(num1, num2, num3) {
    return num1 < num2 && num1 < num3 && num2 < num3;
}
console.log(ascendingOrder(50, 20, 6));
console.log(ascendingOrder(5, 25, 125));
console.log(ascendingOrder(2, 4, 8));