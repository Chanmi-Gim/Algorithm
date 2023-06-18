function isPrime(num){
    if(num === 1 || num === 0 ) return false
    for(let i = 2; i <= Math.floor(Math.sqrt(num)); i++){
        if(num % i === 0) return false
    }
    return true
}


function solution(n, k) {
    n = n.toString(k).split(0);
    return n.map((el)=> Number(el)).filter((el)=> isPrime(el)).length
}
