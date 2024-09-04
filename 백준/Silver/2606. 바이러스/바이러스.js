const [n, _, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const arr = input.map((x) => x.split(' ').map(Number));
const visited = Array.from({ length: +n + 1 }, () => false);
const graph = Array.from({ length: +n + 1 }, () => []);
for (const [start, end] of arr) {
    graph[start].push(end);
    graph[end].push(start);
}

const dfs = (v) => {
    visited[v] = true;
    for (const n of graph[v]) {
        if (!visited[n]) {
            dfs(n);
        }
    }
};
dfs(1);
const answer = visited.reduce((acc, el) => (el ? acc + el : acc), 0) - 1;
console.log(answer);
