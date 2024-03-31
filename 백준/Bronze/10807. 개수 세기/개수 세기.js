const [_, input, v] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const arr = input.split(' ');
let answer = 0;
arr.forEach((num) => {
    if (num === v) answer++;
});
console.log(answer);