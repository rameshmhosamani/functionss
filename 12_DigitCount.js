// Function digitCount numbers.

function digitCount(n) {
    let count = 0;
    if (n >= 1) ++count;
    while (n / 10 ) {                   // while (n / 10 >= 1)
        n /= 10;
        ++count;
    }
    return count;
}
console.log(digitCount(12112));
console.log(digitCount(145));