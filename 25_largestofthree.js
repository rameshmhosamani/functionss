// Program to find the largest of three numbers
//
function largestOfthree(a, b, c) {
    large_num = 0;
    if (a > b)
        large_num = a;
    else
        large_num = b;
    if (c > large_num)
        large_num = c;
    return large_num;
}
console.log("Largest number is :");
console.log(largestOfthree(1, 0, 1));
console.log(largestOfthree(0, -10, -20));
console.log(largestOfthree(1000, 510, 440));