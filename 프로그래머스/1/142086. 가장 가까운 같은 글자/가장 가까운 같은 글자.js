function solution(s) {
    const memo = {}
    const arr = new Array(s.length).fill(-1);
    s.split('').forEach((x, i)=> {
        if(s.indexOf(x) !== i) arr[i] = i - memo[x]
        memo[x] = i 
    })
    return arr
}