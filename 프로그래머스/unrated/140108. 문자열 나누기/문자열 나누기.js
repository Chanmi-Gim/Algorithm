function solution(s) {
    let [count, answer] = [0,0];
    let str = s[0];
    for(let i =0; i<s.length; i++){
        if(str === s[i]) count++
        else{count--}
        if(count === 0) {
            answer++
            str = s[i+1];
        }
    }
    return count === 0 ? answer : answer + 1;
}