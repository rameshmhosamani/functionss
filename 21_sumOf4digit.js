// compute the sum of its last 4 digits.

function getSum(n) {
    let sum = 0;
    while (n != 0) {
        sum = sum + n % 10;
        n = parseInt(n / 10);
    }
    return sum;
}
console.log(getSum(6324));