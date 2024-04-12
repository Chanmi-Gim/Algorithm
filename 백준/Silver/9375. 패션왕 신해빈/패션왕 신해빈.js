const [_, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const len = input.length;
const answer = [];
for (let i = 0; i < len; i++) {
    const n = +input[i];
    let cnt = 1;
    if (typeof n === 'number') {
        const hash = new Map();
        for (let j = i + 1; j <= i + n; j++) {
            let [clothes, type] = input[j].split(' ');
            hash.set(type, (hash.get(type) || []).concat(clothes));
        }
        for (const [_, v] of hash) cnt *= v.length + 1;
    }
    i += n;
    answer.push(cnt - 1);
}
console.log(answer.join('\n'));
