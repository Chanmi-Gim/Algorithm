const [nm, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = nm.split(' ').map(Number);
const arr = input.map(Number).sort((a, b) => a - b);
let min = Number.MAX_SAFE_INTEGER;
for (let lp = 0; lp < n - 1; lp++) {
    for (let rp = lp + 1; rp < n; rp++) {
        let distance = arr[rp] - arr[lp];
        if (distance < m) continue;
        min = Math.min(min, distance);
        break;
    }
}
console.log(min);