// given a number n,return true if it is divisible by either 3 or 7.
function multipleOf37(n) {
  if (n % 3 == 0 || n % 7 == 0) 
    return true;
  else 
    return false;
}
console.log(multipleOf37(12));
console.log(multipleOf37(14));
console.log(multipleOf37(10));