const fs = require('fs');
const str = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
const [n, m] = str.map(Number);
const arr = [];
const dfs = (v, idx, str) => {
    if (v === m) {
        arr.push(str);
        return;
    }
    for (let i = idx; i <= n; i++) {
        dfs(v + 1, i, str + i + ' ');
    }
};
dfs(0, 1, '');
console.log(arr.join('\n'));