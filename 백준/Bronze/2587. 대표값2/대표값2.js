const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number).sort();
const len = input.length;
const answer = [input.reduce((acc, el) => acc + el, 0) / len, input[Math.round((len - 1) / 2)]];
console.log(answer.join('\n'));