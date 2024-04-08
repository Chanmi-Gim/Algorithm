const [n, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const tower = input[0].split(' ').map(Number);
const stack = [];
const answer = Array.from({ length: +n }, () => 0);

for (let i = n - 1; i >= 0; i--) {
    while (stack.length > 0 && tower[stack.at(-1)] <= tower[i]) {
        const idx = stack.pop();
        answer[idx] = i + 1;
    }
    stack.push(i);
}
console.log(answer.join(' '));