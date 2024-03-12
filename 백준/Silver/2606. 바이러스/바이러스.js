const fs = require('fs');
const [node, k, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const arr = input.map((x) => x.split(' ').map(Number));
const graph = Array.from({ length: Number(node) + 1 }, () => []);
const visited = Array.from({ length: Number(node) + 1 }, () => 0);
arr.forEach((item) => {
    let [from, to] = item;
    graph[to].push(from);
    graph[from].push(to);
});
const dfs = (s, v) => {
    visited[s] = 1;
    for (let i = 0; i < graph[s].length; i++) {
        if (!visited[graph[s][i]]) {
            dfs(graph[s][i], v + 1);
        }
    }
};
dfs(1, 0);
console.log(visited.filter((x) => x == 1).length - 1);