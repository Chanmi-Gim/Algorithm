function solution(survey, choices) {
    const score = [3, 2, 1, 0, 1, 2, 3], duo = [["R","T"],["C","F"],["J","M"],["A","N"]]
    const arr = duo.flat()
    const hash = new Map()
    let answer = ""
    for(const x of arr) hash.set(x, 0)
    for(let i = 0; i < choices.length ; i++){
        if(choices[i] < 4) hash.set(survey[i][0], hash.get(survey[i][0])+score[choices[i]-1])
        if(choices[i] > 4) hash.set(survey[i][1], hash.get(survey[i][1])+score[choices[i]-1])
    }
    const result = [...hash.entries()]
    for(let j = 0; j < result.length-1 ; j+= 2){
        if(result[j][1] > result[j+1][1]){
            answer += result[j][0]
        }else if(result[j][1] < result[j+1][1]){
            answer += result[j+1][0]
        }else{
            answer += dictionarySeq(result[j][0], result[j+1][0])
        }
    }
    return answer
}
const dictionarySeq = (str1, str2) => str1.charCodeAt(0) < str2.charCodeAt(0)? str1 : str2