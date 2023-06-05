function solution(want, number, discount) {
    let answer = 0; 
    let myMap = new Map();
    for(let i = 0 ; i < discount.length ; i++){
        for(let i = 0; i < want.length ; i++) myMap.set(want[i], number[i]);
        for(let j = i ; j < i+10 ; j++){
            if(myMap.has(discount[j])) myMap.set(discount[j], myMap.get(discount[j])-1)
            if(Array.from(myMap.values()).every((x)=> x === 0)) answer++;
        }
    }
    return answer
}