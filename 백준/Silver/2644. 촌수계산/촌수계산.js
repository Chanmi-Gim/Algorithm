const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input.shift());
const [x, y] = input.shift().split(' ').map(Number);
input.shift();
const arr = input.map((x) => x.split(' ').map(Number));
const visited = Array(n + 1).fill(0);
const graph = Array.from({ length: n + 1 }, () => []);
arr.forEach((item) => {
    let [from, to] = item;
    graph[from].push(to);
    graph[to].push(from);
});
let answer = 0;
const dfs = (v, x) => {
    if (x === y) answer = v;
    for (const s of graph[x]) {
        if (!visited[s]) {
            visited[s] = 1;
            dfs(v + 1, s);
        }
    }
};
dfs(0, x);
answer ? console.log(answer) : console.log(-1);