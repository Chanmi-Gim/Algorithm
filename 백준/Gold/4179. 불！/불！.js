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
    let move = 1;
    const queue = [];
    fire.forEach((item) => {
        queue.push([...item, 'F', 0]);
    });
    queue.push([...jihoon, 'J', 0]);
    while (queue.length !== 0) {
        const [x, y, type, step] = queue.shift();
        if (type === 'J') move -= 1;
        if (x === 0 || x === R - 1 || y === 0 || y === C - 1) {
            if (type === 'J') return step + 1;
        }
        for (let i = 0; i < 4; i++) {
            const [newX, newY] = [x + ds[i][0], y + ds[i][1]];
            if (newX < 0 || newX >= R || newY < 0 || newY >= C) continue;
            if (type === 'J') {
                if (arr[newX][newY] === '.') {
                    arr[newX][newY] = 'J';
                    queue.push([newX, newY, 'J', step + 1]);
                    move += 1;
                }
            } else if (type === 'F') {
                if (arr[newX][newY] === '.' || arr[newX][newY] === 'J') {
                    arr[newX][newY] = 'F';
                    queue.push([newX, newY, 'F']);
                }
            }
        }
        if (move <= 0) break;
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