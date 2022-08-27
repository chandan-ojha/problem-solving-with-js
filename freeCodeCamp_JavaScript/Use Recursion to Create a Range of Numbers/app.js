function rangeOfNumbers(startNum, endNum) {
    if(endNum - startNum === 0){
      return [startNum];
    } else {
      var numbers = rangeOfNumbers(startNum, endNum - 1);
      //console.log(numbers);
      numbers.push(endNum);
      return numbers;
    }
    
    return [];
    
  }
  
  console.log(rangeOfNumbers(1,5))