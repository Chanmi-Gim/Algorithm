const [nm, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = nm.split(' ').map(Number);
const arr = input[0].split(' ').map(Number);
let min = Number.MAX_SAFE_INTEGER;
for (let i = 0; i < n; i++) {
    let sum = arr[i];
    if (sum >= m) {
        min = Math.min(min, 1);
    } else {
        for (let j = i + 1; j < n; j++) {
            sum += arr[j];
            if (sum < m) continue;
            min = Math.min(min, j - i + 1);
            break;
        }
    }
}
if (min === Number.MAX_SAFE_INTEGER) min = 0;
console.log(min);