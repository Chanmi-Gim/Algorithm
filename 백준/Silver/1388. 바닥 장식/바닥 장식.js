const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = input.shift().split(' ').map(Number);
const visited = Array.from({ length: n }, () => Array(m).fill(false));
let answer = 0;
const dRow = [0, 0, 1, -1];
const dCol = [1, -1, 0, 0];
const dfs = (r, c, word) => {
    visited[r][c] = true;
    let [startIdx, endIdx] = word === '-' ? [0, 2] : [2, 4];
    for (let k = startIdx; k < endIdx; k++) {
        let [newRow, newCol] = [r + dRow[k], c + dCol[k]];
        if (newRow >= 0 && newRow < n && newCol >= 0 && newCol < m && !visited[newRow][newCol]) {
            if (word === input[newRow][newCol]) {
                visited[newRow][newCol] = true;
                dfs(newRow, newCol, word);
            }
        }
    }
};

for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        if (visited[i][j] === false) {
            dfs(i, j, input[i][j]);
            answer++;
        }
    }
}
console.log(answer);