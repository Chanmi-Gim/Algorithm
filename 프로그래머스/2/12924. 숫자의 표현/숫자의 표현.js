function solution(n){
    let sum = 0, cnt = 0;
    let s = 1, e = 1;
    while(s <= n) {
        sum += e
        if(sum >= n || e === n){
            if(sum === n) cnt++
            e = s;
            sum = 0; 
            s++            
        }
        e++
    }
    return cnt
}

