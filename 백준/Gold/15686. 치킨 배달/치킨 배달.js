const [nm, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [_, m] = nm.split(' ').map((n) => Number(n));
const input = arr.map((n) => n.split(' ').map((n) => Number(n)));

const houseXY = [];
const chickenStoreXY = [];

input.forEach((row, r) => {
    row.forEach((col, c) => {
        if (col === 1) houseXY.push([r, c]);
        if (col === 2) chickenStoreXY.push([r, c]);
    });
});

const findChickenRoad = (sX, sY, hX, hY) => Math.abs(sX - hX) + Math.abs(sY - hY);

let answer = Number.MAX_SAFE_INTEGER;
const dfs = (v, selected) => {
    if (selected.length === m) {
        let cityChickenRoad = 0;
        houseXY.forEach(([hX, hY]) => {
            let minRoad = Number.MAX_SAFE_INTEGER;
            selected.forEach(([sX, sY]) => {
                minRoad = Math.min(minRoad, findChickenRoad(sX, sY, hX, hY));
            });
            cityChickenRoad += minRoad;
        });
        answer = Math.min(answer, cityChickenRoad);
        return;
    }
    for (let i = v; i < chickenStoreXY.length; i++) {
        selected.push(chickenStoreXY[i]);
        dfs(i + 1, selected);
        selected.pop();
    }
};
dfs(0, []);
console.log(answer);
