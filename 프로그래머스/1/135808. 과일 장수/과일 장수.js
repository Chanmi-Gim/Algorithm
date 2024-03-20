const solution = (k, m, score) => {
    const number = score.sort((a, b)=> b - a)
    const len = Math.floor(number.length / m) * m 
    let answer = 0 ;
    for(let i = 0 ; i < len; i += m){
        answer += Math.min(...number.slice(i, i+m))*m *1
    }
    return answer
};