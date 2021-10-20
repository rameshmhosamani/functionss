// middle charecter of a number.
function middleChar(str) {
    let len = str.length;
    let middle = parseInt(len / 2, 10);
    console.log (str[middle]);
}
middleChar("GeeksForGeeks");
middleChar("gadag");
middleChar("11011");