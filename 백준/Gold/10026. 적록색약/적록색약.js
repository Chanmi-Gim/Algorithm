const fs = require('fs');
let [N, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const arr = input.map((item) => item.split(''));
const visited = Array.from({ length: +N }, () => Array(+N).fill(0));
const ds = [
    [-1, 0],
    [1, 0],
    [0, 1],
    [0, -1],
];
let normal = 0;
let blindness = 0;
const bfs = (x, y) => {
    const stack = [[x, y]];
    while (stack.length) {
        const [x, y] = stack.pop();
        visited[x][y] = 1;
        for (let k = 0; k < 4; k++) {
            let newX = x + ds[k][0];
            let newY = y + ds[k][1];
            if (newX < 0 || newY < 0 || newX >= +N || newY >= +N) continue;
            if (!visited[newX][newY] && arr[newX][newY] === arr[x][y]) {
                stack.push([newX, newY]);
            }
        }
    }
};
for (let i = 0; i < +N; i++) {
    for (let j = 0; j < +N; j++) {
        if (!visited[i][j]) {
            bfs(i, j);
            normal++;
        }
    }
}
for (let i = 0; i < +N; i++) {
    for (let j = 0; j < +N; j++) {
        if (arr[i][j] === 'G') {
            arr[i][j] = 'R';
        }
        visited[i][j] = 0;
    }
}
for (let i = 0; i < +N; i++) {
    for (let j = 0; j < +N; j++) {
        if (!visited[i][j]) {
            bfs(i, j);
            blindness++;
        }
    }
}
console.log(normal, blindness);