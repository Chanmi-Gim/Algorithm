function solution(dirs) {
    let [curRow, curCol] = [5, 5];
    const dRow = [-1, 1, 0, 0];
    const dCol = [0, 0, 1, -1];
    const log = [];
    for (let k = 0; k < dirs.length; k++) {
        const s = dirs[k] === 'U' ? 0 : dirs[k] === 'D' ? 1 : dirs[k] === 'R' ? 2 : 3;
        let newRow = curRow + dRow[s];
        let newCol = curCol + dCol[s];
        if (newRow >= 0 && newRow <= 10 && newCol >= 0 && newCol <= 10) {
            log.push([[curCol, curRow].join(' '), [newCol, newRow].join(' ')]);
            curRow = newRow;
            curCol = newCol;
        }
    }
    return new Set(log.map((x) => x.sort().join(' '))).size;
}