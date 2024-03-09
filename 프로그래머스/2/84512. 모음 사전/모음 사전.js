function solution(word) {
    const newWord = ['A', 'E', 'I', 'O', 'U'];
    const len = newWord.length;
    let cnt = 0;
    let answer = 0;
    function dfs(v, str) {
        if (v > len) return;
        if (str === word) {
            answer = cnt;
            return;
        }
        cnt++;
        for (let i = 0; i < len; i++) {
            dfs(v + 1, str + newWord[i]);
        }
    }
    dfs(0, '');
    return answer;
}
