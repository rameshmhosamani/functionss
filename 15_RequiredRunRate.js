//To Calculate the RequiredRunRate.

function RequiredRunRate(target, maxovers, currentscore, oversbowled) {
    return (target - currentscore) / (maxovers - oversbowled);
}
console.log(RequiredRunRate(2, 3, 4, 5));
console.log(RequiredRunRate(13, 42, 1,74));
