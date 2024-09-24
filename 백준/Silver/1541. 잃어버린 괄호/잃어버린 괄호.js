const arr = require('fs').readFileSync('/dev/stdin').toString().trim();
const input = arr.split('-');
let answer = 0;
input.forEach((item, i) => {
    let number = item
        .split('+')
        .map((x) => Number(x))
        .reduce((acc, el) => acc + el, 0);
    number = i == 0 ? number : -number;
    answer += number;
});
console.log(answer);
