//Problem:1---> Write a function that can print any random number between any two given numbers (including them).
function getRandomNumber(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
}

console.log(getRandomNumber(1,6));

//Problem:2---> How can you order roll numbers of students in your class sequentially?
const students = ["sumit","saad","daiyan","akash"];
console.log(students.sort());


//Problem:3---> How can you order names of students in your class sequentially?
const roll_numbers = [3,6,4,1,2,30];
console.log(roll_numbers.sort(function(a,b){
    return a-b;
}))

//Problem:4---> Write a function that can tell us whether an year is a leap year or not.
function isLeapYear(year){
     if((year % 400 === 0) || ((year % 4 === 0) && (year % 100 !== 0)))
     {
       console.log(`${year} is a leap year !`); //template_url ``
     }
     else
     {
        console.log(`${year} is not a  leap year !`);
     }
} 
isLeapYear(2028)

//Problem:5---> How would you determine the number of vowels in a sentence?
const vowels = ["a","e","i","o","u","A","E","I","O","U"];
function countVowels(sentence){
    let count = 0;
    const letters = Array.from(sentence);
    //console.log(letters);
    letters.forEach(function(value){
        if(vowels.includes(value)){
            count++;
        }
    });

    return count;

}
//countVowels("My name is Chandan Ojah");
console.log(countVowels("My name is Chandan Ojah"));

//Problem:6---> How would you extract the duplicate numbers in an array?
const numbers1 = [1,4,5,5,6,7,6,8,9,10,4];
const duplicates = numbers1.filter(function(value,index,array){
     return array.indexOf(value) !== index;
});
console.log(duplicates);

//Problem:7---> How would you extract the unique numbers in an array?
const numbers2 = [1,4,5,5,6,7,6,8,9,10,4];
const unique_number = numbers2.filter(function(value,index,array){
     return array.indexOf(value) === index;
});
console.log(unique_number);