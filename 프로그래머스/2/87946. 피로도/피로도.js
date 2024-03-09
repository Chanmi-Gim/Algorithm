function solution(k, dungeons) {
    let answer = 0;
    let table = new Array(dungeons.length).fill(0);
    function dfs(k, cnt) {
        for (let i = 0; i < dungeons.length; i++) {
            if (table[i] === 0 && dungeons[i][0] <= k) {
                table[i] = 1;
                dfs(k - dungeons[i][1], cnt + 1);
                table[i] = 0;
            }
        }
        answer = Math.max(answer, cnt);
    }
    dfs(k, 0);
    return answer;
}