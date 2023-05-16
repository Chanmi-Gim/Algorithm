function solution(lottos, win_nums) {
    let win = 0;
    const rank = [6,6,5,4,3,2,1]
    lottos.filter(x=> x !==0).forEach(x=>{
        if(win_nums.includes(x)) win++;
    })
    return [rank[lottos.filter(x=> x === 0).length + win], rank[win]]
}