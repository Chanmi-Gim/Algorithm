function solution(board, moves) {
    let stack = [];
    let answer = 0;
    moves.forEach((x) => {
        for (let i = 0; i < board.length; i++) {
            if (board[i][x - 1] !== 0) {
                stack.push(board[i][x - 1]);
                board[i][x - 1] = 0;
                break;
            }
        }
        if (stack.length !== 0 && stack[stack.length - 1] === stack[stack.length - 2]) {
            stack.pop();
            stack.pop();
            answer += 2;
        }
    });
    return answer;
}