const comfirmWord = (a, b)=>{
    let cnt = 0;
    for(let i = 0; i < a.length; i++) if(a[i] !== b[i]) cnt++;
    return cnt <= 1 ? true : false;
}
function solution(begin, target, words) {
    const len = words.length
    const visited = Array.from({length : len}, () => 0)
    let answer = [];
    const dfs = (v, startWord) => {
        if(startWord === target) {
            answer.push(v)
            return
        }
        for(let i = 0; i < len ; i++){
            if(!visited[i] && comfirmWord(startWord, words[i])){
                visited[i] = 1;
                dfs(v+1, words[i]);
                visited[i] = 0;
            }
        }
    }
    dfs(0, begin)
    return answer.length === 0? 0 : Math.min(...answer)
}