const fs = require('fs');
const [nm, input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = nm.split(' ').map(Number);
const arr = input
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);
const str = [];
const answer = [];
const dfs = (v) => {
    if (v === m) {
        answer.push(str.join(' '));
        return;
    }
    for (let i = 0; i < n; i++) {
        str.push(arr[i]);
        dfs(v + 1);
        str.pop();
    }
};
dfs(0, '');
console.log(answer.join('\n'));