function solution(array) {
    let hash = new Map();
    for(const n of array) hash.set(n, (hash.get(n)||0) + 1);
    let arr = Array.from(hash.entries()).sort((a, b)=> b[1] - a[1])
    return arr.length <= 1 ? arr[0][0] : (arr[0][1] === arr[1][1]? -1: arr[0][0])
}