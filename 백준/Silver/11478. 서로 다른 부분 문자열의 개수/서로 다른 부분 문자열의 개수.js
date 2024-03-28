const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')[0];
const set = new Set();
const len = input.length;
for (let i = 0; i < len; i++) {
    let j = i + 1;
    while (j <= len) {
        set.add(input.slice(i, j));
        j++;
    }
}
console.log(set.size);