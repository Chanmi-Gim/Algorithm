const [n, arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const input = arr
    .split(' ')
    .map((x) => Number(x))
    .sort((a, b) => a - b);
const result = input.reduce((acc, el, i) => acc + el * (+n - i), 0);
console.log(result);
