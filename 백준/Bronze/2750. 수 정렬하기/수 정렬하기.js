const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .split('\n')
  .map((x) => Number(x));
let stack =[];
for(let i = 1; i<=input[0]; i++){
    stack.push(input[i])
}
stack.sort((a,b)=>a-b)
for(let i = 0; i<stack.length; i++){
    console.log(stack[i])
}