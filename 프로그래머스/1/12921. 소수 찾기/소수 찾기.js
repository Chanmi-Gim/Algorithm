function solution(n) {
    const arr = Array.from({ length : n + 1 }, (_, i) => i)
    arr[0] = 0;
    arr[1] = 0;
    for(let i = 2; i <= Math.sqrt(n); i++) {
        for(let j = i * i ; j <= n ; j += i) {
            if(arr[j] === 0) continue;
            arr[j] = 0
        }
    }
    return arr.filter((x)=> x !== 0).length
}