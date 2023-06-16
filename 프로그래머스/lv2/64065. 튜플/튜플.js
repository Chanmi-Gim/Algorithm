function solution(s) {
    let stack =[];
    let arr = s.slice(2, -2).split('},{').map(x=> x.split(',')).map((x)=> x.map((el)=> Number(el)))
    arr.sort((a,b)=>a.length - b.length)
    for(let i = 0 ;i<arr.length ; i++){
        for(let j = 0; j<arr[i].length ; j++){
            if(!stack.includes(arr[i][j])) stack.push(arr[i][j])
        }
    }
    return stack
}
