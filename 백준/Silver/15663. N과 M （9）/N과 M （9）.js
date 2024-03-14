const fs = require('fs');
const [nm, input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = nm.split(' ').map(Number);
const arr = input
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);
const visited = Array.from({ length: n }, () => false);
const tmp = [];
const set = new Set();
const dfs = (v) => {
    if (v === m) {
        set.add(tmp.join(' '));
        return;
    }
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            visited[i] = true;
            tmp.push(arr[i]);
            dfs(v + 1);
            visited[i] = false;
            tmp.pop();
        }
    }
};
dfs(0);
console.log([...set].join('\n'));