/** Use Recursion to Create a Countdown **/

// ascending order

function countup(n) {
    if (n < 1) {
      return [];
    } else {
      const countArray = countup(n - 1);
      countArray.push(n);
      return countArray;
    }
  }
  console.log(countup(5));


//Descending Order

function countdown(n){
    return n < 1 ? [] 
            : [n].concat(countdown(n - 1));
 }
 
 console.log(countdown(5))

 //same problem to solve another way
 function countdown(n) {
    if (n < 1) {
      return [];
    } else {
      const arr = countdown(n - 1);
      arr.unshift(n);
      return arr;
    }
  }

  console.log(countdown(5))