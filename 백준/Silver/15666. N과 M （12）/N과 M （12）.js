const fs = require('fs');
const [nm, input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = nm.split(' ').map(Number);
const arr = input
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);
const log = [];
const answer = [];
const dfs = (v, idx) => {
    if (v === m) {
        answer.push(log.join(' '));
        return;
    }
    for (let i = idx; i < n; i++) {
        log.push(arr[i]);
        dfs(v + 1, i);
        log.pop();
    }
};
dfs(0, 0);
console.log([...new Set(answer)].join('\n'));
