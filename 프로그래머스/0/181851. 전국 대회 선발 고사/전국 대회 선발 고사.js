function solution(rank, attendance) {
    const studentList = [];
    const map = new Map(); 
    for (let i = 0; i < rank.length; i++) {
        if(attendance[i]) map.set(rank[i], i)
        else map.set(rank[i], -1)
    }
    const arr = Array.from(map.entries()).sort((a, b)=> a[0] - b[0])
    for(const [k, v] of arr) if(v !== (-1) && studentList.length <= 3) studentList.push(v)
    return studentList[0] * 10000 + studentList[1] * 100 + studentList[2]
}