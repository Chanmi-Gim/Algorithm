const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

const total = input.reduce((acc, el) => acc + el, 0);
let idx1 = 0,
    idx2 = 0;
for (let i = 0; i < input.length - 1; i++) {
    for (let j = i + 1; j < input.length; j++) {
        if (total - (input[i] + input[j]) === 100) {
            idx1 = i;
            idx2 = j;
        }
    }
}
for (let i = 0; i < input.length; i++) {
    if (i !== idx1 && i !== idx2) console.log(input[i]);
}
