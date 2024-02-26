const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

function solution(msg) {
    let idx = 0;
    const result = [];
    let max = 1;
    while (idx < msg.length) {
        for (let i = idx + max; i >= idx; i--) {
            let word = msg.slice(idx, i + 1);
            if (alphabet.includes(word)) {
                let curr = word;
                let next = msg[i + 1];
                result.push(alphabet.indexOf(word) + 1);
                if (next !== undefined) {
                    alphabet.push(curr + next);
                    max = Math.max(max, (curr + next).length)
                }
                idx += word.length;
                break;
            }
        }
    }
    return result;
}