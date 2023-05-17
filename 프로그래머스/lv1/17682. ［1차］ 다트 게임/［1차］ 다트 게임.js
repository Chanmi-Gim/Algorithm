function solution(dartResult) {
    let newStr = '';
    let stack = [];
    for(s of dartResult){
        if(s === 'S'|| s=== 'D' || s === 'T' || s === '*' || s=== '#') s += ' ';
        newStr += s;
    }
    const arr = newStr.trim().split(' ')
    arr.map((x, i)=>{
        if(x === '*' && i === 1){ 
            stack[stack.length-1] = stack[stack.length-1] * 2
            console.log(stack)
        }else if (x === '*' && i !== 1){
            stack[stack.length-1] = stack[stack.length-1] * 2
            stack[stack.length-2] = stack[stack.length-2] * 2   
            console.log(stack)
        }else if(x === '#'){ stack[stack.length-1] = stack[stack.length-1] * -1 }
        else{
            let value = x[x.length-1] === 'S'? ~~x.slice(0,x.length-1):(x[x.length-1] === 'T'? Math.pow(x.slice(0,x.length-1), 3): Math.pow(x.slice(0,x.length-1),2))
            stack.push(value)
        }
    })
    return stack.reduce((acc, el)=> acc+el , 0)

}