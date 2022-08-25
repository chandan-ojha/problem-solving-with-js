//recursion in javascript


//Problem-> 1: 1+2+3+4+5+............ +n

//By Using Loop
let total = 0;
let n = 10;

for(let i=1; i <= n; i++){
    total += i ;
}
console.log(total);

//By Using Recursion [ Recursion Formula: f(n-1)+n = f(n) ]
function sum(n){
    if(n === 0){
        return 0;
    } else {
        return sum(n-1) + n;
    }
}

console.log(sum(5))

// By using this formula (n*(n+1)/2)
let c = 10000;

console.log(c*(c+1)/2);
