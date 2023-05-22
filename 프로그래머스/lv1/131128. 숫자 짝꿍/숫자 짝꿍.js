const solution = (x, y) =>{
    let result ='';
    const map = new Map();
    for (let i =0 ; i<y.length ; i++) map.set(y[i], (map.get(y[i])|| 0) +1);
    for (let i =0 ; i<x.length ; i++) {
        if(map.get(x[i])>=1){
            map.set(x[i], (map.get(x[i]) || 0) -1)
            result += x[i]
        }
    }
    if(result.length < 1) return '-1';
    return +result === 0 ? '0' : result.split('').sort((a, b) => b - a).join('');
}