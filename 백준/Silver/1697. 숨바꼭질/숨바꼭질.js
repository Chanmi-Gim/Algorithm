const [n, k] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const queue = [n];
const visited = Array.from({ length: 100001 }, () => 0);
const bfs = () => {
    while (queue.length) {
        const w = queue.shift();
        if (w === k) return visited[w];
        for (const moved of [w - 1, w + 1, w * 2]) {
            if (moved < 0 || moved >= 100001) continue;
            if (!visited[moved]) {
                visited[moved] = visited[w] + 1;
                queue.push(moved);
            }
        }
    }
};

const answer = bfs();
console.log(answer);
