// 
function addDigitNumbers(num1, num2, num3) {
    let n1 = 0, n2 = 0, n3 = 0;
    for (i = 0; i < 4; i++) {
        n1 = n1 * 10 + num1;
        n2 = n2 * 10 + num2;
        n3 = n3 * 10 + num3;
    }
    return n1 + n2 + n3;
}
console.log(addDigitNumbers(1, 2, 3,));