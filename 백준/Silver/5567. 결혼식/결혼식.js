const fs = require('fs');
const [n, _, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const arr = input.map((item) => item.split(' ').map(Number));
const visited = Array.from({ length: +n + 1 }, () => false);
const graph = Array.from({ length: +n + 1 }, () => []);
visited[1] = true;
for (const item of arr) {
    const [from, to] = item;
    graph[from].push(to);
    graph[to].push(from);
}
const log = [];
const dfs = (v, cnt) => {
    if (cnt === 2) return;
    for (let i = 0; i < graph[v].length; i++) {
        if (!visited[graph[v][i]]) {
            visited[graph[v][i]] = true;
            log.push(graph[v][i]);
            dfs(graph[v][i], cnt + 1);
            visited[graph[v][i]] = false;
        }
    }
};
dfs(1, 0);
console.log(new Set(log).size);