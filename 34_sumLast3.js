function sumLast_3digit(a,b,c) {
    let n1= a % 10;
    let n2 = b % 10;
    if (n1 == n2) 
    
        console.log('last Digit is same');
    else
        console.log('last digit is diffrent');
}
let a = 2545;
let b = 3545;
let c= 34343;
sumLast_3digit(a, b ,c);