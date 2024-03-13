const fs = require('fs');
const [n, k] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
const array = Array.from({ length: n }, (_, i) => i + 1);
const answer = [];
while (array.length) {
    for (let i = 0; i < k; i++) {
        let del = array.shift();
        if (i === k - 1) answer.push(del);
        else array.push(del);
    }
}
console.log('<' + answer.join(', ') + '>');