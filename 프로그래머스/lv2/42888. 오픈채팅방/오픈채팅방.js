function solution(record) {
    let hash = new Map();
    let result = [];
    record = record.map((x)=>x.split(' '))
    record.forEach((x)=>{ if(x[0] === "Enter"|| x[0] === "Change") hash.set(x[1], x[2])})
    record.forEach((x)=>{
        switch(x[0]){
            case "Enter": 
                result.push(`${hash.get(x[1])}님이 들어왔습니다.`)
                break;
            case "Leave":
                result.push(`${hash.get(x[1])}님이 나갔습니다.`)
                break;
        }
    })     
    return result
}