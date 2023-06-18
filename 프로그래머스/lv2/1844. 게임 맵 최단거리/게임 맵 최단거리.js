function solution(maps) {
    let queue = [];
    let answer = Infinity;
    const dx = [0, 0, -1, 1]
    const dy = [1, -1, 0, 0]
    const row = maps.length;
    const column = maps[0].length;

    function BFS(x, y){
        maps[x][y] = 0;
        queue.push([x, y, 1]) 
        
        while(queue.length){
            let [a, b, count] = queue.shift();
            if(count >= answer) return 
            if(a === row-1 && b === column-1) answer = Math.min(answer, count)
            for(let k = 0; k < 4; k++){
                let nx = a + dx[k];
                let ny = b + dy[k];
                if(nx >=0 && nx < row && ny >= 0 && ny <column && maps[nx][ny]===1){
                    maps[nx][ny] = 0
                    queue.push([nx,ny,count+1])
                }
            }
        }
    }
    BFS(0, 0)
    return answer === Infinity? -1: answer
}