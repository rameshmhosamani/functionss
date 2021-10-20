// 
function sameLastDigit(a, b) {
    let n1= a % 10;
    let n2 = b % 10;
    if (n1 == n2) 
    
        console.log('last Digit is same');
    else
        console.log('last digit is diffrent');
}
let a = 2545;
let b = 3545;
sameLastDigit(a, b);
