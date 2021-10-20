//
function isDigit(ch) {
    if (ch >= '0' && ch <= '9')
        return true;
    else
        return false;
}
console.log(isDigit('0'));
console.log(isDigit('a'));
console.log(isDigit('3'));
console.log(isDigit('B'));