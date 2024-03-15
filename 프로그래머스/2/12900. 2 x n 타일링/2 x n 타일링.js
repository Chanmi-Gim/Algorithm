function solution(n){
    const arr = Array.from({length : n + 2}, () => 0);
    arr[0] = 0
    arr[1] = 1;
    for(let i = 2 % 1000000007 ; i <= (n + 1) % 1000000007 ; i++) {
        arr[i] += (arr[i-1] % 1000000007) + (arr[i-2] % 1000000007)
    }
    return arr[arr.length - 1] % 1000000007
}