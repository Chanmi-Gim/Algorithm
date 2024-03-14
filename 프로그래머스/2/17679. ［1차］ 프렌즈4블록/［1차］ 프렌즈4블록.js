const checking = (r, c, board, m, n) => {
    let check = 0;
    const dx = [1, 1, 0];
    const dy = [0, -1, -1];
    for (let i = 0; i < 3; i++) {
        let newRow = r + dx[i];
        let newCol = c + dy[i];
        if (newRow < m && newCol < n && newRow >= 0 && newCol >= 0 && board[newRow][newCol] === board[r][c]) check++;
    }
    return check === 3 ? false : true;
};
const rePainting = (m, n, board, visited) => {
    for (let col = 0; col < n; col++) {
        for (let row = 1; row < m; row++) {
            if (visited[row][col] === false) {
                board[row][col] = false;
                for (let k = row - 1; k >= 0; k--) {
                    [board[k][col], board[k + 1][col]] = [board[k + 1][col], board[k][col]];
                }
            }
        }
    }
    return board;
};

function solution(m, n, board) {
    const dx = [1, 1, 0];
    const dy = [0, -1, -1];
    board = board.map((item) => item.split(''));
    let answer = 0;
    while (true) {
        let cnt = 0;
        const visited = Array.from({ length: m }, () => Array(n).fill(true));
        for (let row = 0; row < m; row++) {
            for (let col = 0; col < n; col++) {
                if (!checking(row, col, board, m, n) && board[row][col] !== false) {
                    visited[row][col] = false;
                    for (let k = 0; k < 3; k++) {
                        visited[row + dx[k]][col + dy[k]] = false;
                    }
                }
            }
        }
        visited.flat().forEach((x) => {
            if (x === false) cnt++;
        });
        answer += cnt;
        if (cnt === 0) break;
        board = rePainting(m, n, board, visited);
    }
    return answer;
}
