function addForThird(a, b, c) {
    if (a + b == c || b + c == a || c + a == b) 
        return true;
    else
        return false;
}
console.log(addForThird(1, 2, 3));
console.log(addForThird(3, 1, 2));
console.log(addForThird(3, 2, 2));
