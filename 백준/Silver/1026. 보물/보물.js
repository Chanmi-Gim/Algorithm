const [n, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [A, B] = arr.map((x) => x.split(' ').map(Number));
A.sort((a, b) => b - a);
B.sort((a, b) => a - b);
let sum = 0;
for (let i = 0; i < +n; i++) sum += A[i] * B[i];
console.log(sum);
