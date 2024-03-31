const word = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')[0];
const alphabet = Array.from({ length: 26 }, () => 0);
for (const s of word) {
    alphabet[s.charCodeAt() - 'a'.charCodeAt()]++;
}
console.log(alphabet.join(' '));