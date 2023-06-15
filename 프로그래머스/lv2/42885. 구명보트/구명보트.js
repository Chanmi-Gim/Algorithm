function solution(people, limit) {
    let lt = 0, rt = people.length-1, count = 0;
    people.sort((a,b)=> a-b)
    while(rt >= lt){
        let sum = people[lt] + people[rt];
        if(lt === rt) sum = people[lt]
        if(sum <= limit) lt++;
        rt--;
        count++;
    }
    return count
}
