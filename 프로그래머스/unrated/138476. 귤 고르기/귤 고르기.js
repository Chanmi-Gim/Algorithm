function solution(k, tangerine) {
    let hash = new Map();
    let answer = [];
    for(one of tangerine) hash.set(one, hash.get(one)+1 || 1);
    let entries = Array.from(hash.entries()).sort((a,b)=>b[1]-a[1])
    entries.reduce((acc, [_,num], i)=> {
        acc += num
        if(acc >= k) answer.push(i+1)
        return acc
    }, 0)
    return answer[0]
}