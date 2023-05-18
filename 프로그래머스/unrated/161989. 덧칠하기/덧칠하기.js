function solution(n, m, section) {
    const table = new Array(n).fill(true);
    let answer = 0;
    section.forEach((idx) => (table[idx - 1] = false)); // 테이블 생성
    section.forEach((x)=>{
        if(table[x-1] === false){
            for(let i = 0; i<m ; i++){
                table[x-1+i] = true
            }
            answer++
        }
    })
    return answer
}