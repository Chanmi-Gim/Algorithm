function checking(s){
    let stack = [];
    for(const x of s){
        if(x === "("||x === "["|| x === "{") stack.push(x)
        else {
            if(stack.length === 0) return false
            else if(x === ')'){
                if(stack[stack.length-1] !== "(") return false;
                else stack.pop()
            }else if(x === ']'){
                if(stack[stack.length-1] !== "[") return false;
                else stack.pop()
            }else{
                if(stack[stack.length-1] !== "{") return false;
                else stack.pop()
            }
        }
    }
    if(stack.length > 0) return false
    return true
}

function solution(s) {
    let count = 0;
    for(let i = 0 ; i < s.length ; i++){
        let str = s.slice(i) + s.slice(0,i)
        if(checking(str)) count++
    }
    return count
}