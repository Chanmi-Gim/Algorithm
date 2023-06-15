function solution(number, k) {
    let stack =[];
    number.split('').forEach((x)=>{
        while(stack.length > 0 && k > 0 && stack[stack.length-1] < x){
            stack.pop();
            k--;
        }
        stack.push(x)
    })
    // 모든 현재값이 스택에 있는 경우보다 다 작은 경우
    let a = stack.length -(number.length - k)
    if(a !== 0) {
        for(let i = 0 ; i < a; i++){
            let min = Math.min(...stack)
            stack.splice(stack.indexOf(min) , 1)
        }
    }
    return stack.join('')
}