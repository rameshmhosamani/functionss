// a perfect number is a positive integer that is equal to the sum of its factors.

function is_Perfect(number) {
    var temp = 0;
    for (var i = 1; i <= number / 2; i++) 
        if (number % i === 0)
            temp += i;
    if (temp === number && temp !== 0)

        console.log("is a Perfect number.");
    else
        console.log("is not a Perfect number.");
}
is_Perfect(6);
is_Perfect(24);