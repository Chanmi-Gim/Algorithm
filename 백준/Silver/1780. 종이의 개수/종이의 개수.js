const fs = require('fs');
let [N, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const arr = input.map((item) => item.split(' ').map(Number));
let cnt = [0, 0, 0];
const numberChecker = (x, y, n) => {
    for (let i = x; i < x + n; i++) {
        for (let j = y; j < y + n; j++) {
            if (arr[x][y] !== arr[i][j]) return false;
        }
    }
    return true;
};
const slicer = (x, y, z) => {
    if (numberChecker(x, y, z)) {
        cnt[arr[x][y] + 1] += 1;
        return;
    }
    let n = z / 3;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            slicer(x + i * n, y + j * n, n);
        }
    }
};
slicer(0, 0, +N);
console.log(cnt.join('\n'));
