const [n, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const tower = input.map(Number);
const stack = [];
let cnt = 0;

for (let i = 0; i < n; i++) {
    while (stack.length > 0 && tower[stack[stack.length - 1]] <= tower[i]) {
        stack.pop();
    }
    cnt += stack.length;
    stack.push(i);
}

console.log(cnt);