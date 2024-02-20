function solution(arr) {
    const maxNumber = Math.max(...arr)
    let cnt = 1, answer = 0;
    while(true){
        let gcd = maxNumber * cnt;
        if (arr.every((n) => gcd % n === 0)) {
            answer = gcd
            break;
        }
        cnt++;
    }
    return answer
}