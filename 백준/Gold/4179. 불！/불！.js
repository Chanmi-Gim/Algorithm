const [RC, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [R, C] = RC.split(' ').map(Number);
const arr = input.map((v) => v.split(''));

let jihoonPos = [];
let firePos = [];
arr.forEach((row, i) => {
    row.forEach((col, j) => {
        if (col === 'J') jihoonPos = [i, j];
        if (col === 'F') firePos.push([i, j]);
    });
});

const bfs = (jihoon, fire) => {
    const queue = []; // queue에 불 먼저 들어간 다음, jihoon가 들어가는 게 포인트
    fire.forEach((v) => {
        queue.push([...v, 'F', 0]);
    });
    queue.push([...jihoon, 'J', 0]);
    while (queue.length !== 0) {
        const [x, y, type, step] = queue.shift();
        if (x === 0 || x === R - 1 || y === 0 || y === C - 1) {
            if (type === 'J') return step + 1;
        }
        for (let i = 0; i < 4; i++) {
            const newX = x + ds[i][0];
            const newY = y + ds[i][1];
            if (newX < 0 || newY < 0 || newX >= R || newY >= C) continue;
            if (type === 'J') {
                if (arr[newX][newY] === '.') {
                    arr[newX][newY] = 'J';
                    queue.push([newX, newY, 'J', step + 1]);
                }
            } else if (type === 'F') {
                if (arr[newX][newY] === '.' || arr[newX][newY] === 'J') {
                    arr[newX][newY] = 'F';
                    queue.push([newX, newY, 'F']);
                }
            }
        }
    }
    return 'IMPOSSIBLE';
};
const ds = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
];

console.log(bfs(jihoonPos, firePos));