function solution(topping) {
    let chulsuMap = new Map();
    let brotherMap = new Map();
    let cnt = 0;
    for(const x of topping) chulsuMap.set(x, (chulsuMap.get(x) || 0) + 1)
    for(let i = 0 ; i < topping.length ; i++){
        if(chulsuMap.size === brotherMap.size) cnt++;
        brotherMap.set(topping[i], (brotherMap.get(topping[i]) || 0) + 1);
        chulsuMap.set(topping[i], chulsuMap.get(topping[i]) - 1)
        if(chulsuMap.get(topping[i]) === 0) chulsuMap.delete(topping[i])
    }
    return cnt
}