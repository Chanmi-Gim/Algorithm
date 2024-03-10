const fs = require('fs');
const [str, input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = str.split(' ').map(Number);
const arr = input
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);
const visited = Array(n + 1).fill(0);
const answer = [];
const dfs = (v, idx, str) => {
    if (v === m) {
        answer.push(str);
        return;
    }
    for (let i = idx; i < n; i++) {
        if (!visited[i]) {
            visited[i] = 1;
            dfs(v + 1, i, str + arr[i] + ' ');
            visited[i] = 0;
        }
    }
};
dfs(0, 0, '');
console.log(answer.join('\n'));