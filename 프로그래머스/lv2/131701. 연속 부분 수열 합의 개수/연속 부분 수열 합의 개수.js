function solution(elements) {
    let answer = new Set(elements);
    let len = elements.length;
    
    for(let k = 2 ; k <=len ; k++){        
        let sum = elements.slice(0, k).reduce((acc,el)=>acc+el,0)
        let stack =[sum];
        let i = k;
        while(stack.length < len){
            sum += (elements[i%len] - elements[(i-k)%len])
            stack.push(sum)
            i++
        }
        stack.forEach((x)=> answer.add(x))
    }
    return answer.size
}
