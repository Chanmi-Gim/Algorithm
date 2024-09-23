const [_, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let complex = 0;
const apartNumber = [];
const xLen = input.length;
const yLen = input[0].length;
const visited = Array.from({ length: xLen }, () => Array(yLen).fill(false));
const ds = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
];
const dfs = (x, y) => {
    let cnt = 1;
    visited[x][y] = true;
    for (let i = 0; i < 4; i++) {
        let newX = x + ds[i][0];
        let newY = y + ds[i][1];
        if (newX >= 0 && newY >= 0 && newX < xLen && newY < yLen && input[newX][newY] === '1' && !visited[newX][newY]) {
            cnt += dfs(newX, newY);
        }
    }
    return cnt;
};

for (let r = 0; r < xLen; r++) {
    for (let c = 0; c < yLen; c++) {
        if (input[r][c] === '1' && !visited[r][c]) {
            complex += 1;
            let result = dfs(r, c);
            apartNumber.push(result);
        }
    }
}
console.log(complex);
apartNumber
    .sort((a, b) => a - b)
    .forEach((item) => {
        console.log(item);
    });
