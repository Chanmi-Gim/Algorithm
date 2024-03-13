const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('.\n');
input.pop();
let answer = [];
input.forEach((item) => {
    const stack = [];
    let flag = 0;
    item.split('').forEach((s) => {
        if (s === '(' || s === '[') stack.push(s);
        else if ((s === ')' && stack.at(-1) === '(') || (s === ']' && stack.at(-1) === '[')) stack.pop();
        else if (
            (s === ']' && (stack.length === 0 || stack.at(-1) !== '[')) ||
            (s === ')' && (stack.length === 0 || stack.at(-1) !== '('))
        )
            flag = 1;
    });
    stack.length !== 0 || flag ? answer.push('no') : answer.push('yes');
});
console.log(answer.join('\n'));