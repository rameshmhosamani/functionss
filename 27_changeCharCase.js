//
function changeCharCase(str) {
        const lower = str.toLowerCase();
        return str.charAt(0).toUpperCase() + lower.slice(1);
      }  
  console.log(changeCharCase('foo'));