const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const s1 = input[0];
const s2 = input[1];
const count1 = new Array(26).fill(0);
const count2 = new Array(26).fill(0);

for (let char of s1) {
    count1[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
}

for (let char of s2) {
    count2[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
}

let result = 0;
for (let i = 0; i < 26; i++) {
    result += Math.abs(count1[i] - count2[i]);
}

console.log(result);
