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
