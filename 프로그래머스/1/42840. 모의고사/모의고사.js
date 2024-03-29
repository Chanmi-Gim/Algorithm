function solution(answers) {
    const person1 = [1, 2, 3, 4, 5]
    const person2 = [2, 1, 2, 3, 2, 4, 2, 5]
    const person3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    const count = Array(3).fill(0)
    const answer = [];
    for(let i = 0 ; i < answers.length; i++){
        if(person1[i % 5] === answers[i]) count[0] += 1
        if(person2[i % 8] === answers[i]) count[1] += 1
        if(person3[i % 10] === answers[i]) count[2] += 1
    }
    let max = Math.max(...count);
    return count.reduce((acc, el, i) => {
        if(el === max) acc.push(i+1)
        return acc
    }, [])
}