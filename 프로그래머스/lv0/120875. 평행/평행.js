function solution(dots) {
    let stack =[];
    for(let i = 0; i<dots.length ;i++){
        for(let j = i+1; j< dots.length ; j++){
            let slope = Math.abs(dots[i][1] - dots[j][1])/Math.abs(dots[i][0]- dots[j][0])
            stack.push(slope)
        }
    }
    let my_map = new Map();
    for (s of stack) my_map.set(s, 0)
    for (s of stack) my_map.set(s, my_map.get(s)+1)
    let slopeList = Array.from(my_map.values())
    return slopeList.includes(2) || slopeList.includes(4) ||slopeList.includes(6)? 1: 0
}