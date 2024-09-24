let number = +require('fs').readFileSync('/dev/stdin').toString().trim();
let count = 0;
while (number > 0) {
    if (number % 5 === 0) {
        const share = parseInt(number / 5);
        number -= share * 5;
        count += share;
    } else {
        number -= 3;
        count++;
    }
}
const answer = number === 0 ? count : -1;
console.log(answer);
