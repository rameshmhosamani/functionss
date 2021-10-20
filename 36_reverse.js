// given a 3 digit number as input reverse it.
function reverse_3Digit(n) {
    n = n + "";
    return n.split("").reverse().join("");
}
console.log(reverse_3Digit(22435));
console.log(reverse_3Digit(123));