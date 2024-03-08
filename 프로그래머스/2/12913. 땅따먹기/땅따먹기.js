function solution(land) {
    for(let i = 1; i < land.length; i++){
        for(let j = 0; j < land[0].length; j++){
            let arr = []
            for(let k = 0; k < 4 ; k++){
                if(land[i][j] !== land[i][k]){
                    arr.push(land[i-1][k] || 0)
                }
            }
            land[i][j] += Math.max(...arr)
        }
    }
    return Math.max(...land[land.length - 1])
}

// [1,2,3,5]
// [5,6,7,8]
// [4,3,2,1]

// [1, 2,  3,  5]
// [7, 9, 12, 11]
// [13,15,13,13]

function solution(land) {

    // 이차원 배열 생성
    const dp = Array.from({length : land.length}, () => Array(4).fill(0));

    dp[0] = land[0];
    for(let i = 0; i< land.length - 1; i++){
        for(let j = 0; j < 4; j++)
            for(let k = 0; k < 4; k++){
                if(j===k)
                    continue;
                const temp = dp[i][j] + land[i+1][k];
                if(temp > dp[i+1][k])
                    dp[i+1][k] = temp;
            }
    }
    return Math.max(...dp.at(-1));
}