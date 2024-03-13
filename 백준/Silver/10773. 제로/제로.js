const fs = require('fs');
const [n, ...input] = fs.readFileSync('dev/stdin').toString().trim().split('\n');
const stack = [];
for (let i = 0; i < n; i++) {
    if (stack.length !== 0 && input[i] === '0') {
        stack.pop();
        continue;
    }
    stack.push(input[i]);
}
const answer = stack.reduce((acc, el) => acc + +el, 0);
console.log(answer);