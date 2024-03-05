const fs = require('fs');
let [n, k] = fs.readFileSync('/dev/stdin').toString().split(' ').map(Number);

function solution(n, k) {
    const answer = [];
    for (let i = 1; i <= n; i++) if (n % i === 0) answer.push(i);
    return answer.length >= k ? answer[k - 1] : 0; 
}

let answer = solution(n, k);
console.log(answer);