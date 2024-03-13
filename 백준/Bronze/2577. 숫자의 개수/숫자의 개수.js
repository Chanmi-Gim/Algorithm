const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const number = input.reduce((acc, el) => acc * el, 1);
const table = Array.from({ length: 10 }, () => 0);
for (const n of String(number)) table[n] += 1;
console.log(table.join('\n'));