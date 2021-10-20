//chech the condition is palindrome or not.
function isPalindrome(num) {
    //return num == num.split("").rev().join("") ? false : true;
    let rev = 0;
    for (let i = num; i > 0;) {
        rem = i % 10;
        rev = rev * 10 + rem;
        i = parseInt(i / 10);
    }
    return rev == num;
}
console.log(isPalindrome("1001"));
console.log(isPalindrome("490"));
console.log(isPalindrome("2345"));

