const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
let sum = 0;
for (let i = 0; i < input.length; i++) {
    sum += input[i];
    if (sum > 100) {
        let diff = Math.abs(sum - 100);
        let beforeDiff = Math.abs(sum - input[i] - 100);
        sum = diff === beforeDiff ? sum : diff > beforeDiff ? sum - input[i] : sum;
        break;
    }
}
console.log(sum);