const [nm, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = nm.split(' ').map((x) => Number(x));
const arr = input.map((i) => i.split(' ').map((x) => Number(x)));

const graph = Array.from({ length: n }, () => []);

for (let i = 0; i < arr.length - m; i++) {
    const [start, end, cost] = arr[i];
    graph[start - 1].push([end - 1, cost]);
    graph[end - 1].push([start - 1, cost]);
}
const dfs = (startNode, endNode, cost, visited) => {
    visited[startNode] = 1;
    if (startNode === endNode) {
        console.log(cost);
        return;
    }
    for (let i = 0; i < graph[startNode].length; i++) {
        let [nextNode, edgeCost] = graph[startNode][i];
        if (!visited[nextNode]) {
            dfs(nextNode, endNode, cost + edgeCost, visited);
        }
    }
};

for (let i = arr.length - m; i < arr.length; i++) {
    const visited = Array.from({ length: n }, () => 0);
    const [startNode, endNode] = arr[i];
    dfs(startNode - 1, endNode - 1, 0, visited);
}