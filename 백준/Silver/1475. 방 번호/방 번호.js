const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();
const answer = Array(9).fill(0);
for (const n of input) {
    if (n === '6' || n === '9') {
        answer[6] += 1;
        continue;
    }
    answer[n] += 1;
}
answer[6] = Math.ceil(answer[6] / 2);
console.log(Math.max(...answer));