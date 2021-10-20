//find the values are hundredth Diigit.
function hundredthDigit(num) {
    let hundredthDigit;
    let count = 3;
    while (count--) {
        hundredthDigit = num % 10;
        num = parseInt(num / 10);
    }
    return hundredthDigit;
}
console.log(hundredthDigit(1234));
