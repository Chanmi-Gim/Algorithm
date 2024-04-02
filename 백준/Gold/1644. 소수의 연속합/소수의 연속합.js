const n = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)[0];
const isPrime = Array.from({ length: n + 1 }, (_, i) => i);
isPrime[0] = 0;
isPrime[1] = 0;
for (let i = 2; i * i <= n; i++) {
    if (isPrime[i]) {
        for (let j = i * i; j <= n; j += i) {
            isPrime[j] = 0;
        }
    }
}
const prime = isPrime.filter((x) => x !== 0);
const len = prime.length;
let cnt = 0;
for (let i = 0; i < len; i++) {
    let sum = prime[i];
    if (sum === n) cnt++;
    else {
        for (let j = i + 1; j < len; j++) {
            sum += prime[j];
            if (sum > n) break;
            else if (sum === n) {
                cnt++;
                break;
            } else continue;
        }
    }
}
console.log(cnt);