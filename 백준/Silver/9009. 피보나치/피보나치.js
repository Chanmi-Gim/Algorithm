const [T, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const input = arr.map(Number);
const fibo = [0, 1];
while (fibo[fibo.length - 1] < 1e9) {
    fibo.push(fibo[fibo.length - 1] + fibo[fibo.length - 2]);
}
let line = 0;
while (line !== +T) {
    const answer = [];
    let idx = fibo.length - 1;
    let n = input[line];
    while (n > 0) {
        if (n >= fibo[idx]) {
            answer.push(fibo[idx]);
            n -= fibo[idx];
        }
        idx--;
    }
    line++;
    console.log(answer.sort((a, b) => a - b).join(' '));
}
