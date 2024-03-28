const [nm, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = nm.split(' ').map(Number);
let numToNameDic = new Map();
let nameToNumDic = new Map();
const answer = [];
for (let i = 0; i < n; i++) numToNameDic.set(i + 1, input[i]);
for (let i = 0; i < n; i++) nameToNumDic.set(input[i], i + 1);
for (let i = n; i < n + m; i++) {
    let element = isNaN(+input[i]) ? nameToNumDic.get(input[i]) : numToNameDic.get(+input[i]);
    answer.push(element);
}
console.log(answer.join('\n'));