function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) if (n % i === 0) return false;
    return true;
}
function solution(numbers) {
    const len = numbers.length;
    const visited = Array(len).fill(0);
    let set = new Set();
    function dfs(v, str) {
        if (str !== '' && isPrime(Number(str)) === true) set.add(Number(str));
        if (v === len) return;
        for (let i = 0; i < len; i++) {
            if (visited[i] === 0) {
                visited[i] = 1;
                dfs(v + 1, str + numbers[i]);
                visited[i] = 0;
            }
        }
    }
    dfs(0, '');
    return set.size;
}