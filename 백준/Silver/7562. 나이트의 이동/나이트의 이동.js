const [T, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const input = arr.map((item) => item.split(' ').map(Number));
const ds = [
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
    [2, -1],
    [2, 1],
    [-2, 1],
    [-2, -1],
];
let line = 0;
while (line !== +T * 3) {
    const l = input[line++][0];
    const [cX, cY] = input[line++];
    const [mX, mY] = input[line++];
    const visited = Array.from({ length: l }, () => Array(l).fill(false));
    let count = 0;
    if (cX === mX && cY === mY) {
        console.log(count);
        continue;
    }
    visited[cX][cY] = true;
    const queue = [[cX, cY, count + 1]];
    let found = 0;
    while (queue.length) {
        let [cX, cY, count] = queue.shift();
        for (let i = 0; i < 8; i++) {
            let newX = cX + ds[i][0];
            let newY = cY + ds[i][1];
            if (newX >= 0 && newY >= 0 && newX < l && newY < l && !visited[newX][newY]) {
                if (newX === mX && newY === mY) {
                    found = true;
                    break;
                }
                queue.push([newX, newY, count + 1]);
                visited[newX][newY] = true;
            }
        }
        if (found) {
            console.log(count);
            break;
        }
    }
}
