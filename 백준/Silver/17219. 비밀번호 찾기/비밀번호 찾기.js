const [nm, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = nm.split(' ').map(Number);
const answer = [];
const hash = new Map();
for (let i = 0; i < n; i++) {
    let [id, password] = input[i].split(' ');
    hash.set(id, password);
}
for (let j = n; j < n + m; j++) {
    answer.push(hash.get(input[j]));
}

console.log(answer.join('\n'));