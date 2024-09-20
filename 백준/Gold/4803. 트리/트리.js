const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const arr = input.map((i) => i.split(' ').map((x) => Number(x)));
const dfs = (v, visited, graph, prev) => {
    visited[v] = 1;
    for (let i = 0; i < graph[v].length; i++) {
        if (!visited[graph[v][i]]) {
            if (dfs(graph[v][i], visited, graph, v)) return true;
        } else if (graph[v][i] !== prev) return true;
    }
    return false;
};

let line = 0;
let T = 1;
while (true) {
    let [node, n] = arr[line];
    if (node === 0 && n === 0) break;
    const graph = Array.from({ length: node + 1 }, () => []);
    const visited = Array.from({ length: node + 1 }, () => 0);
    line++;
    for (let i = line; i < line + n; i++) {
        let [start, end] = arr[i];
        graph[start].push(end);
        graph[end].push(start);
    }
    let cnt = 0;
    for (let i = 1; i <= node; i++) {
        if (!visited[i]) {
            if (!dfs(i, visited, graph, null)) cnt++;
        }
    }
    let answer = `Case ${T}: `;
    if (cnt === 0) answer += 'No trees.';
    else if (cnt === 1) answer += 'There is one tree.';
    else answer += `A forest of ${cnt} trees.`;
    console.log(answer);
    line += n;
    T++;
}
