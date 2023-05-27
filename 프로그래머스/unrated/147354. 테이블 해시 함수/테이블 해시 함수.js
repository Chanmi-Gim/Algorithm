function solution(data, col, row_begin, row_end) {
    let stack = [];
    data.sort((a,b) => {
        if (a[col-1] > b[col-1]) return 1
        else if(a[col-1] < b[col-1]) return -1
        else{
            return a[0] > b[0]? -1: 1
        }
    })
    for(let i = row_begin; i <= row_end ; i++){
        let sum = data[i-1].map((el)=> el%i).reduce((acc,el)=> acc+el, 0) 
        stack.push(sum)
    }
    return stack.reduce((acc, el)=> acc ^ el)
}
