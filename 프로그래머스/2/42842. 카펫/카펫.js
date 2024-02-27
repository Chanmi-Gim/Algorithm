function solution(brown, yello){
    const answer = [];
    for(let i = 3; i <= brown; i++){
        let j = (brown - (i * 2)) / 2
        if (j * (i-2) === yello) {
            answer.push(j+2, i)
            break;
        }
    }
    return answer
}