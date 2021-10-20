// a number as input and returns a string filled wiith random integers as many times.

function naturalNum(numCount) {
    let string = '';
    while (numCount--) {
        string = string + parseInt(Math.random() * 10);
    }
    return string;
}
console.log(naturalNum(5));

