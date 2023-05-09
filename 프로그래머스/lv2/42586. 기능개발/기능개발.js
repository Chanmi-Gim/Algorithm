function solution(progresses, speeds) {
    let answer = [];
    while (progresses.length !== 0) {
        progresses = progresses.map((el, i) => el + speeds[i]);
        console.log(progresses);
        
        // 첫번째 기능이 완료된경우
        if (progresses[0] >= 100) {
            let index = 1;
            for (let i = 1; i < progresses.length; i++) {
                if (progresses[i] < 100) {
                    index = i;
                    break;
                } else {
                    index = i + 1;
                }
            }
            speeds.splice(0, index);
            let complete = progresses.splice(0, index);
            answer.push(complete.length);
        }
    }
    return answer;
}