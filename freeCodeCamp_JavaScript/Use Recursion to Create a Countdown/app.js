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