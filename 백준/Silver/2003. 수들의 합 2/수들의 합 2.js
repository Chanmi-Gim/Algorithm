const [nm, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = nm.split(' ').map(Number);
const arr = input[0].split(' ').map(Number);
let cnt = 0;
for (let lp = 0; lp < n; lp++) {
    let sum = arr[lp];
    if (sum === m) cnt++;
    else {
        let rp = lp + 1;
        while (rp < n) {
            sum += arr[rp];
            rp += 1;
            if (sum === m) cnt++;
            else if (sum < m) continue;
            else break;
        }
    }
}
console.log(cnt);