function solution(name) { 
    const alphabet = {"A":0, "B":1, "C":2, "D":3, "E":4, "F":5, "G":6, "H":7, "I":8, "J":9, "K":10, "L":11, "M":12, "N":13, "O":14, "P":15, "Q":16, "R":17, "S":18, "T":19, "U":20, "V":21, "W":22, "X":23, "Y":24, "Z":25};
    let answer = 0; 
    const len = name.length
    
    // up-down count
    for(let i = 0; i < len ; i++){
        answer += Math.min(alphabet[name[i]], 26 - alphabet[name[i]])
    }
    
    // left-right count
    let minMove = len - 1;
    for(let i = 0; i < len ; i++){
        let next = i + 1;
        while(next < len && name[next] === 'A') next++;
        const move = i + len - next + Math.min(i, len - next);
        minMove = Math.min(minMove, move)
    }
    return answer + minMove
}
    
    