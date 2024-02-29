function solution(n) {
    let answer = 0;
    while(true){
        if (n % 2 === 0) n /= 2;
        else {
            n -= 1;
            answer++;
        }
        if(n === 0) break;
    }
    return answer
}