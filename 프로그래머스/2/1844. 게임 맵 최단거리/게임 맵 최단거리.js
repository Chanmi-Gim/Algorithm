function solution(maps) {
    const ds = [[0, 1], [0, -1], [1, 0], [-1, 0]]
    const rowLen = maps.length
    const colLen = maps[0].length
    const visited = Array.from({length : rowLen}, () => Array(colLen).fill(0))
    const answer = []; 
    const bfs = (r, c, cnt) => {
        const queue = [[r, c, cnt]];
        visited[r][c] = 1
        while(queue.length){
            const [r, c, cnt] = queue.shift();
            if(r === rowLen-1 && c === colLen-1) {
                answer.push(cnt);
                return
            }
            for(let k = 0; k < 4; k++){
                let newRow = r + ds[k][0];
                let newCol = c + ds[k][1];
                if(newRow < 0 || newCol < 0 || newRow >= rowLen || newCol >= colLen) continue;
                if(!visited[newRow][newCol] && maps[newRow][newCol] === 1){
                    queue.push([newRow, newCol, cnt+1])
                    visited[newRow][newCol] = 1     
                }
            }   
        }
    }
    bfs(0, 0, 1)
    return answer.length === 0 ? -1 : Math.min(...answer)
}