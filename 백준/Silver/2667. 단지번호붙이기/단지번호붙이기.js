const [n, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const arr = input.map((item) => item.split('').map(Number));
const ds = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
];
const bfs = (x, y) => {
    const queue = [[x, y]];
    arr[x][y] = 0;
    let cnt = 1;
    while (queue.length) {
        const [x, y] = queue.shift();
        for (let k = 0; k < 4; k++) {
            let newX = x + ds[k][0];
            let newY = y + ds[k][1];
            if (newX < 0 || newY < 0 || newX >= +n || newY >= +n || !arr[newX][newY]) continue;
            arr[newX][newY] = 0;
            queue.push([newX, newY]);
            cnt++;
        }
    }
    answer.push(cnt);
};
let totalCount = 0;
let answer = [];
for (let i = 0; i < +n; i++) {
    for (let j = 0; j < +n; j++) {
        if (arr[i][j]) {
            bfs(i, j);
            totalCount++;
        }
    }
}
console.log([totalCount, ...answer.sort((a, b) => a - b)].join('\n'));
