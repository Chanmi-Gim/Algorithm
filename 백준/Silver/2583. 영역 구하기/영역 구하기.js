const [crk, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [c, r, k] = crk.split(' ').map(Number);
const arr = input.map((item) => item.split(' ').map(Number));
const graph = Array.from({ length: r }, () => Array(c).fill(0));

for (let i = 0; i < k; i++) {
    let [x1, y1, x2, y2] = arr[i];
    for (let r = x1; r < x2; r++) {
        for (let c = y1; c < y2; c++) {
            graph[r][c] = 1;
        }
    }
}
const ds = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
];
let kCnt = 0;
const bfs = (x, y) => {
    const queue = [[x, y]];
    let count = 1;
    graph[x][y] = 1;
    while (queue.length) {
        const [x, y] = queue.shift();
        for (let i = 0; i < r; i++) {
            for (let j = 0; j < c; j++) {
                for (let k = 0; k < 4; k++) {
                    let newX = x + ds[k][0];
                    let newY = y + ds[k][1];
                    if (newX < 0 || newY < 0 || newX >= r || newY >= c || graph[newX][newY]) continue;
                    if (!graph[newX][newY]) {
                        queue.push([newX, newY]);
                        graph[newX][newY] = 1;
                        count++;
                    }
                }
            }
        }
    }
    return count;
};
const cntAnswer = [];
for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
        if (!graph[i][j]) {
            cntAnswer.push(bfs(i, j));
            kCnt++;
        }
    }
}
console.log(kCnt + '\n' + cntAnswer.sort((a, b) => a - b).join(' '));