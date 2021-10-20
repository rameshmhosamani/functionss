// factorial of the number.
function Factorial(n) {
    var ans = 1;

    for (var i = 2; i <= n; i++)
        ans = ans * i;
    return ans;
}
console.log(Factorial(4));




// n != n * (n - 1) * (n - 2) *....* 1
//  4!=4*3*2*1=24
