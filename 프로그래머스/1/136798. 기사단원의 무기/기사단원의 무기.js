// 1. number의 약수를 구한다. 
// 2. limit에 해당하는 수가 없으면 전체 합 리턴, 있으면 모두 power로 바꾼뒤 전체 합 리턴
function solution(number, limit, power) {
    let answer = 1; 
    for(let i = 2; i <= number; i++){
        let num = 1;
        for(let j = 1; j <= i/2; j++) {
            if (i % j === 0) num++;
        }
        if(num > limit) num = power;
        answer += num;
    }
    return answer
}