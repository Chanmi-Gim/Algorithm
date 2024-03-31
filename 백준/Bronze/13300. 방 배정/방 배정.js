const [nk, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [_, k] = nk.split(' ');
const arr = input.map((item) => item.split(' ').map(Number));
const grade = Array.from({ length: 6 }, () => Array(2).fill(0));
for (const [s, y] of arr) {
    if (s === 0) grade[y - 1][0] += 1;
    else grade[y - 1][1] += 1;
}
let cnt = 0;
grade.forEach((items) =>
    items.forEach((item) => {
        cnt += Math.ceil(item / +k);
    })
);
console.log(cnt);