function solution(n, wires) {
    const graph = Array.from({ length: n + 1 }, () => []);
    for (const [from, to] of wires) {
        graph[from].push(to);
        graph[to].push(from);
    }
    const dfs = (node, visited) => {
        let sum = 1;
        visited[node] = true;
        for (let i = 0; i < graph[node].length; i++) {
            if (!visited[graph[node][i]]) {
                sum += dfs(graph[node][i], visited);
            }
        }
        return sum;
    };

    let minValue = Number.MAX_SAFE_INTEGER;
    wires.forEach(([v1, v2]) => {
        const visited = Array.from({ length: n + 1 }, () => false);
        visited[v1] = true;
        const result = dfs(v2, visited);
        minValue = Math.min(minValue, Math.abs(n - result - result));
    });
    return minValue;
}