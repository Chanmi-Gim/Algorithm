function solution(n){
    const arr = Array.from({length : n + 2}, () => 0);
    arr[1] = 1
    arr[2] = 1
    for(let i = 3 ; i <= n + 1; i++) {
        arr[i] += (arr[i-1] + arr[i-2]) % 1000000007
    }
    return arr[arr.length - 1] 
}
