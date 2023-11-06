function solution(new_id) {
    let answer = new_id.toLowerCase()
    answer = answer.match(/[a-z0-9\_\.\-]/g).join('')
    answer = answer.replace(/\.{2,}/g, ".")
    answer = answer.replace(/(^\.)|(\.$)/, "")
    if(answer.length === 0) answer += "a"
    if(answer.length >= 16) answer = answer.slice(0,15)
    answer = answer.replace(/\.$/,"")
    if(answer.length <= 2) {
        while(answer.length < 3){
            answer += answer[answer.length-1]
        }
    }
    return answer
}