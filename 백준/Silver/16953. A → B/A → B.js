let [A, B] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
let count = 0;
let flag = false;
while (B>=A) {
    if (A === B) {
        flag = true;
        break;
    }
    if (B % 2 === 0) B /= 2;
    else if (B % 10 === 1) B = parseInt(B / 10);
    else break;
    count += 1;
}
count = flag ? count + 1 : -1;
console.log(count);
