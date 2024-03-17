const fs = require('fs');
const [nm, input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = nm.split(' ').map(Number);
const arr = input
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);
const log = [];
const answer = [];
const dfs = (v) => {
    if (v === m) {
        answer.push(log.join(' '));
        return;
    }
    for (let i = 0; i < n; i++) {
        log.push(arr[i]);
        dfs(v + 1);
        log.pop();
    }
};
dfs(0);
console.log([...new Set(answer)].join('\n'));
