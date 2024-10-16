const [_, ...words] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
words.sort((a, b) => b.length - a.length);

const hash = new Map();
words.forEach((word) => {
    const len = word.length - 1;
    for (let i = 0; i <= len; i++) {
        hash.set(word[i], (hash.get(word[i]) || 0) + 10 ** (len - i));
    }
});

const sortedHash = [...hash.entries()].sort((a, b) => b[1] - a[1]);
sortedHash.forEach((alphabet, i) => hash.set(alphabet[0], 9 - i));

let sum = 0;
words.forEach((word) => {
    let number = '';
    for (let i = 0; i < word.length; i++) {
        number += hash.get(word[i]);
    }
    sum += +number;
});
console.log(sum);
