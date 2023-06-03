function solution(k, tangerine) {
    let hash = new Map();
    let answer = 0;
    for(one of tangerine) hash.set(one, (hash.get(one) || 0) + 1);
    let entries = Array.from(hash.entries()).sort((a,b)=>b[1]-a[1])
    for(const [_, num] of entries){
        answer++; 
        if(k > num) k -= num;
        else break;
    }
    return answer
}