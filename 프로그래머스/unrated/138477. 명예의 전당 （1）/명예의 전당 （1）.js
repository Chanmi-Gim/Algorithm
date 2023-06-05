function solution(k, score) {
    let fameHall =[];
    let answer = [];
    score.map(el=> {
        if(fameHall.length === k){
            if(fameHall[k-1]< el){
                fameHall[k-1] = el
            }
        }else{
            fameHall.push(el)
        }
        fameHall.sort((a,b)=>b-a)
        answer.push(fameHall[fameHall.length-1])
    })
    return answer
}