const fs = require('fs');
let [T, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const arr = input.map((item) => item.split(' ').map(Number));
let answer = [];
const ds = [
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
];
const bfs = (x, y, v) => {
    const queue = [[x, y, v]];
    visited[x][y] = 1;
    while (queue.length) {
        const [x, y, v] = queue.shift();
        if (x === targetX && y === targetY) return v;
        for (let k = 0; k < 8; k++) {
            let newX = x + ds[k][0];
            let newY = y + ds[k][1];
            if (newX < 0 || newY < 0 || newX >= l || newY >= l) continue;
            if (!visited[newX][newY]) {
                visited[newX][newY] = 1;
                queue.push([newX, newY, v + 1]);
            }
        }
    }
};
for (let i = 0; i < +T; i++) {
    var l = arr.shift();
    var visited = Array.from({ length: l }, () => Array(l).fill(0));
    const [x, y] = arr.shift();
    var [targetX, targetY] = arr.shift();
    answer.push(bfs(x, y, 0));
}
console.log(answer.join('\n'));
