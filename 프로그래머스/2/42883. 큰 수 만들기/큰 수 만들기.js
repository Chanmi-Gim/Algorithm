const solution = (number, k) => {
    const stack = [];
    const size = number.length - k;
    number.split('').forEach((n) => {
        while(stack[stack.length-1] < n && k){
            stack.pop();
            k--;
        }
        if(stack.length < size) stack.push(n);   
    })
    return stack.join('')
}