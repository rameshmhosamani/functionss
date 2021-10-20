function lotteryPrize(ticketnumber) {
    return ticketnumber % 4 == 0 && ticketnumber % 7 == 0 ? 20 : ticketnumber % 4 == 0 ? 6 : ticketnumber % 7 == 0 ? 10 : 0;
}
console.log(lotteryPrize(140));
console.log(lotteryPrize(24));
console.log(lotteryPrize(70));