// fibonacci series.
function Fibonacci(num) {
    let f1 = "0", f2 = "1", f3;
    for (let i = 1; i <= num; i++) {
        console.log(f1);
        f3 = parseInt(f1 + f2);
        f1 = parseInt(f2);
        f2 = parseInt(f3);
    }
    return f1;
}
console.log(Fibonacci(11))