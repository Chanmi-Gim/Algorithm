const solution = (n, lost, reserve) => {
    const student = Array(n).fill(1);
    lost.forEach((item)=> { student[item-1]--; });
    reserve.forEach((item)=>{ student[item-1]++; });
    for(let i = 0 ; i < n ; i++){
        if(!student[i]){
            if(i !== 0 && student[i-1] == 2){
                student[i]++;
                student[i-1]--;
            }else if(i !== n-1 && student[i+1] == 2){
                student[i]++;
                student[i+1]--;
            }
        }
    }
    return student.filter((el)=> el > 0).length
}