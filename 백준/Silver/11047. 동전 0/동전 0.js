const [nk, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [n, k] = nk.split(' ').map((n) => Number(n));
const input = arr.map((item) => Number(item));
let count = 0;
for (let i = n - 1; i >= 0; i--) {
    const share = parseInt(k / input[i]);
    if (share) {
        k -= share * input[i];
        count += share;
    }
}
console.log(count);
