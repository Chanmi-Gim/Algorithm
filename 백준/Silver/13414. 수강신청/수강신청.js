const fs = require('fs');
const [n, ...arr] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let number = +n.split(' ')[0];
const map = new Map();
let answer = [];
arr.forEach((x, i) => {
    if (map.has(x)) map.delete(x);
    map.set(x, i);
});
map.forEach((_, k) => {
    if (number > 0) {
        answer.push(k);
        number--;
    }
});
console.log(answer.join('\n'));