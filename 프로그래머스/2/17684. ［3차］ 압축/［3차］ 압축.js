const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

function solution(msg) {
    let idx = 0, max = 1;
    const result = [];
    while (idx < msg.length) {
        for (let i = idx + max; i >= idx; i--) {
            let curr = msg.slice(idx, i + 1);
            if (alphabet.includes(curr)) {
                let next = msg[i + 1];
                result.push(alphabet.indexOf(curr) + 1);
                if (next !== undefined) {
                    alphabet.push(curr + next);
                    max = Math.max(max, (curr + next).length)
                }
                idx += curr.length;
                break;
            }
        }
    }
    return result;
}