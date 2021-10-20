// given the three numbers are input retuns num1,num2,num3,its num1 is greater than at least one num2,num3.

function largerThanOne(num1, num2, num3) {
    return num1 >= num2 && num1 >= num3;
}
console.log(largerThanOne(50, 20, 6));
console.log(largerThanOne(10, 55, 8));
