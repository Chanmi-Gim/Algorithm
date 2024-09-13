function solution(n, s) {
    const share = parseInt(s / n);
    if(share == 0) return [-1]
    let rest = s % n; 
    const arr = Array.from({length : n}, ()=> share);
    while(rest){
        n--;
        arr[n] += 1
        rest--;
    }
    return arr
}