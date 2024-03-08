function solution(land) {
    for(let i = 1; i < land.length; i++){
        for(let j = 0; j < land[0].length; j++){
            let arr = [];
            for(let k = 0; k < 4 ; k++){
                if(j !== k) arr.push(land[i-1][k] || 0)
            }
            land[i][j] += Math.max(...arr)
        }
    }
    return Math.max(...land[land.length - 1])
}
