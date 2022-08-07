//problem 1 -> How many times use "chandan" keyword. Find first position of "chandan".
const sentence = `Lorem ipsum dolor sit amet, Chandan consectetur adipiscing elit, 
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Molestie ac feugiat sed lectus vestibulum mattis ullamcorper.Chandan
                  quisque non tellus orci ac auctor augue mauris augue. 
                  Praesent semper feugiat nibh sed pulvinar proin gravida.Chandan
                  neque convallis a cras semper auctor neque vitae. 
                  Malesuada pellentesque elit eget gravida cum sociis natoque penatibus. 
                  Tortor vitae purus faucibus ornare.`;

const matches = sentence.match(/chandan/gi);
//console.log(matches);

//const ocurances = matches.length ;

const ocurances = matches ? matches.length : 0 ;
console.log(ocurances);

let position = sentence.search(/chandans/i);
//console.log(position);
position = position >= 0 ? position : "not found";

console.log(position); 


//problem 2
/*
 * input: linearSearch(['a','b','c','d','c'],'c')
 * output: 2 or 'not found!'
 * problem: implements linearSearch() function
*/

function linearSearch(arr, val){
    const length = arr.length;
     for(let i = 0; i < length; i++){
         if(arr[i] === val){
            return i ;
         }
     }

     return 'not found';
}

console.log(linearSearch(['a','b','c','d','c'],'b'));

/** Problem: 3
 * How to find big string and index from an array
 **/

function lonestString(names){
   let longestWord = '';

   for(let name of names){
       if(name.length > longestWord.length){
           longestWord = name;
       }
   }

   return [longestWord, names.indexOf(longestWord)];
}

console.log(lonestString(['Chandan Oja','Mahafuj Hasan Shohag','Omar Frauk','Nur Mohammaad Rayhan']));

//problem:4 -> ১-১০০ পর্যন্ত কোন সংখ্যা গুলো ৩, ৫, এবং ৩ ও ৫ উভয় সংখ্যা দ্বারা বিভাজ্য তা নির্নয় কর !

function fizzBuzz(number)
{
    for(let i = 1; i <= number; i++)
    {
        if(i % 15 === 0){
            console.log(`${i} is FizzBuzz`);
        }
        else if(i % 3 === 0)
        {
            console.log(`${i} is Fizz`);
        }
        else if(i % 5 === 0)
        {
            console.log(`${i} is Buzz`);
        }
        else 
        {
            console.log(i);
        }
    }
}

fizzBuzz(100);

