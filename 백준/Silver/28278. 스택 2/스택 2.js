const fs = require('fs');
const [_, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const cmd = input.map((c) => c.split(' ').map(Number));
const stack = [];
const answer = [];
cmd.forEach((c) => {
    if (c[0] === 1) {
        stack.push(c[1]);
    } else if (c[0] === 2) {
        stack.length === 0 ? answer.push(-1) : answer.push(stack.pop());
    } else if (c[0] === 3) {
        answer.push(stack.length);
    } else if (c[0] === 4) {
        stack.length === 0 ? answer.push(1) : answer.push(0);
    } else {
        stack.length === 0 ? answer.push(-1) : answer.push(stack.at(-1));
    }
});
console.log(answer.join('\n'));