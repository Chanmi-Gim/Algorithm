function solution(N, A, B) {
    let table = new Array(N).fill(0).map((_, i) => i + 1);
    let cnt = 0;
    while (table.length > 1) {
        cnt++;
        for (let i = 0; i < table.length - 1; i += 2) {
            if ((table[i] === A && table[i + 1] === B) || (table[i] === B && table[i + 1] === A)) {
                return cnt;
            } else if (table[i] !== A && table[i] !== B && table[i + 1] !== A && table[i + 1] !== B) {
                table[i] = false;
            } else if (table[i + 1] === A || table[i + 1] === B) {
                table[i] = false;
            } else {
                table[i + 1] = false;
            }
        }
        table = table.filter((x) => x !== false);
    }
    return cnt;
}
