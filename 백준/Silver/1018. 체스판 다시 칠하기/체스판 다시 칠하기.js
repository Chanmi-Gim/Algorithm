const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let [n, m] = input.shift().split(' ');
let answer = Number.MAX_SAFE_INTEGER;
const color = ['W', 'B'];
for (let i = 0; i <= n - 8; i++) {
    for (let j = 0; j <= m - 8; j++) {
        for (let c = 0; c < 2; c++) {
            let cnt = 0;
            let st = color[c];
            for (let s = i; s < i + 8; s++) {
                for (let p = j; p < j + 8; p++) {
                    if (st !== input[s][p]) cnt++;
                    if (p < j + 7) st = st === 'W' ? 'B' : 'W';
                }
            }
            answer = Math.min(answer, cnt);
        }
    }
}
console.log(answer);