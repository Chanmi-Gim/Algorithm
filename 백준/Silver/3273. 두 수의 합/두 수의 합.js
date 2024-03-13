const fs = require('fs');
const [n, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const x = input.pop();
const arr = input[0]
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);
let answer = 0;
let i = 0;
let j = n - 1;
while (i !== j) {
    if (arr[i] + arr[j] === +x) answer++, i++;
    else if (arr[i] + arr[j] > +x) j--;
    else i++;
}
console.log(answer);