const [n, arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const input = arr.split(' ').map(Number);
let result = 0;
let arrow = Array.from({ length: +n + 1 }, () => 0); 
input.forEach((balloon) => {
    if (arrow[balloon] > 0) {
        arrow[balloon] -= 1;
        arrow[balloon - 1] += 1;
    } else {
        arrow[balloon - 1] += 1;
        result += 1;
    }
});
console.log(result);
