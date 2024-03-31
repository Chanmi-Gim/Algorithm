const [n, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const arr = input.map((item) => item.split(' '));
const answer = [];
for (let i = 0; i < +n; i++) {
    const alphabetA = Array.from({ length: 26 }, () => 0);
    const alphabetB = Array.from({ length: 26 }, () => 0);
    for (let j = 0; j < arr[i][0].length; j++) {
        alphabetA[arr[i][0][j].charCodeAt() - 'a'.charCodeAt()]++;
    }
    for (let j = 0; j < arr[i][1].length; j++) {
        alphabetB[arr[i][1][j].charCodeAt() - 'a'.charCodeAt()]++;
    }
    alphabetA.every((s, i) => s === alphabetB[i]) ? answer.push('Possible') : answer.push('Impossible');
}
console.log(answer.join('\n'));