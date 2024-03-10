const fs = require('fs');
const str = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
const [n, m] = str.map(Number);
const arr = [];
const dfs = (v, str) => {
    if (v === m) {
        arr.push(str);
        return;
    }
    for (let i = 1; i <= n; i++) {
        dfs(v + 1, str + i + ' ');
    }
};
dfs(0, '');
console.log(arr.join('\n'));