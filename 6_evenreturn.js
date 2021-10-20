//A function which takes An integer as input and returns true if it is even false if it's not
    function isEven(n) {
        if (n < 0 ) {
              return false
        }
         else if (n % 2 == 0) {
              return true
        } else {
              return isEven(n-2)
        }
      }
      console.log(isEven(30));
      console.log(isEven(31));
      console.log(isEven(32));