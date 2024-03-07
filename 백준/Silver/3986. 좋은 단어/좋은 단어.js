const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift();
input = input.map((word) => word.split(''));
let cnt = 0;
for (let i = 0; i < input.length; i++) {
    let stack = [];
    let len = input[i].length;
    for (let j = 0; j < len; j++) {
        let pop = input[i].pop();
        stack[stack.length - 1] === pop ? stack.pop() : stack.push(pop);
    }
    if (stack.length === 0) cnt++;
}
console.log(cnt);