const fs = require('fs');
const [nm, input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = nm.split(' ').map(Number);
const arr = input
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);
const answer = [];
const numbers = [];
const dfs = (v, idx) => {
    if (v === m) {
        answer.push(numbers.join(' '));
        return;
    }
    for (let i = idx; i < n; i++) {
        numbers.push(arr[i]);
        dfs(v + 1, idx++);
        numbers.pop();
    }
};
dfs(0, 0);
console.log(answer.join('\n'));