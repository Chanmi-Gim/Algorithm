let [n, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input = input.map(Number);
const numArr = Array.from({ length: +n }, (_, i) => i + 1).sort((a, b) => b - a);
const stack = [];
const log = [];
const answer = [];
let idx = 0;

while (numArr.length) {
    if (input[idx] === numArr.at(-1)) {
        let p = numArr.pop();
        stack.push(p);
        answer.push('+');
        let pop = stack.pop();
        answer.push('-');
        log.push(pop);
        idx++;
    } else {
        if (input[idx] === stack.at(-1)) {
            let p = stack.pop();
            answer.push('-');
            log.push(p);
            idx++;
        } else {
            let p = numArr.pop();
            stack.push(p);
            answer.push('+');
        }
    }
}

while (stack.length) {
    let p = stack.pop();
    log.push(p);
    answer.push('-');
}

let flag = 0;
for (let i = 0; i < +n; i++) {
    if (input[i] !== log[i]) {
        flag = 1;
        break;
    }
}
flag ? console.log('NO') : console.log(answer.join('\n'));