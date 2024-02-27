function solution(n, t, m, p) {
    let result = [];
    for(let i = 0; i < t * m ; i++){
        if(result.length > t * m) break;
        let str = i.toString(n).toUpperCase().split('')
        result.push(...str);
    }
    return result.filter((_, i)=> (i % m === (p-1)) && i < t * m).join('')
}