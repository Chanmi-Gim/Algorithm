const fs = require('fs');
const [T, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const ds = [
    [-1, 0],
    [1, 0],
    [0, 1],
    [0, -1],
];

const bfs = (startX, startY) => {
    const queue = [[startX, startY]];
    while (queue.length) {
        const [x, y] = queue.shift();
        if (!map[x][y]) continue;
        else map[x][y] = 0;
        for (let i = 0; i < 4; i++) {
            const dx = x + ds[i][0];
            const dy = y + ds[i][1];
            if (dx < 0 || dy < 0 || dx >= M || dy >= N) continue;
            if (map[dx][dy]) queue.push([dx, dy]);
        }
    }
};
for (let i = 0; i < +T; i++) {
    let answer = 0;
    var [M, N, K] = input.shift().split(' ').map(Number);
    var map = Array.from({ length: M }, () => Array(N).fill(0));
    for (let j = 0; j < K; j++) {
        const [x, y] = input.shift().split(' ').map(Number);
        map[x][y] = 1;
    }
    for (let k = 0; k < M; k++) {
        for (let l = 0; l < N; l++) {
            if (map[k][l]) {
                bfs(k, l);
                answer++;
            }
        }
    }
    console.log(answer);
}