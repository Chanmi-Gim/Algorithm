function solution(n, vertex) {
    const graph = Array.from({ length: n + 1 }, () => []);
    const visited = Array.from({ length: n + 1 }, () => false);
    const distance = Array.from({ length: n + 1 }, () => -1);
    for (const item of vertex) {
        const [from, to] = item;
        graph[from].push(to);
        graph[to].push(from);
    }
    const bfs = (node) => {
        const queue = [node];
        distance[node] = 0;
        visited[node] = 1;
        while (queue.length) {
            const n = queue.shift();
            for (let i = 0; i < graph[n].length; i++) {
                if (!visited[graph[n][i]]) {
                    visited[graph[n][i]] = 1;
                    distance[graph[n][i]] = distance[n] + 1;
                    queue.push(graph[n][i]);
                }
            }
        }
    };
    bfs(1);
    const max = Math.max(...distance);
    return distance.filter((d) => d === max).length;
}