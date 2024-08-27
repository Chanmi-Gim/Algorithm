function solution(number, k) {
    let stack =[];
    number.split('').forEach((x)=>{
        while(stack.length > 0 && k > 0 && stack[stack.length-1] < x){
            stack.pop();
            k--;
        }
        stack.push(x)
    })
    stack.splice(stack.length-k, k)
    return stack.join('')
}