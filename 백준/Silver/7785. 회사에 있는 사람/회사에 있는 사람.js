const [n, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const hash = new Map();
for (let i = 0; i < +n; i++) {
    const [name, type] = input[i].split(' ');
    type === 'enter' ? hash.set(name, type) : hash.delete(name);
}
const answer = [...hash.keys()].sort().reverse();
console.log(answer.join('\n'));