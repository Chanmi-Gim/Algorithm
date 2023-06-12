function solution(s){  
    let stack = [];
    for(const x of s){
        if(x === "(") stack.push("(")
        else{
            if(stack.length === 0) return false
            stack.pop()
        }
    }
    if(stack.length !== 0) return false
    return true
}