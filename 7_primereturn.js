//An integer as input and returns true if it is prime false if it's not

function isPrime(n) {
    if (n == 1)
        return false;
    else if (n == 2) 
        return true;   
    else
        for (var i = 2; i < n; i++) {
            if (n % i == 0)
                return false;
            return true;
        }
}
console.log(isPrime(37));
console.log(isPrime(38));
console.log(isPrime(43));

