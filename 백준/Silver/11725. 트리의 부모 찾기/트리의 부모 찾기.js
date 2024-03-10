const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const len = input.shift();
const arr = input.map((item) => item.split(' ').map(Number));
const graph = Array.from({ length: Number(len) + 1 }, () => []);
const visited = Array(len + 1).fill(0);
const parentNodeList = Array(len + 1).fill(0);
let answer = '';
arr.forEach((item) => {
    let [from, to] = item;
    graph[from].push(to);
    graph[to].push(from);
});

const dfs = (v) => {
    if (visited[v]) return;
    for (let i = 0; i < graph[v].length; i++) {
        if (!visited[graph[v][i]]) {
            parentNodeList[graph[v][i]] = v;
            visited[v] = true;
            dfs(graph[v][i]);
        }
    }
};
dfs(1);
parentNodeList.forEach((x, i) => {
    if (i >= 2) answer += x + '\n';
});
console.log(answer);