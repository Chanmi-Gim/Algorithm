function solution(people, limit) {
    people.sort((a, b)=> b - a);
    const len = people.length;
    let cnt = 0, rp = len - 1;
    for(let lp = 0; lp <= rp ; lp++){
        if(people[lp] + people[rp] <= limit) {
            rp--;
        }     
        cnt++;
    }
    return cnt
}