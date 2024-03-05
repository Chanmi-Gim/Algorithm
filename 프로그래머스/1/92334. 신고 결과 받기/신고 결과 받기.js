function solution(id_list, reports, k) {
    reports = Array.from(new Set(reports))
    const reportTable = {};
    const reportedTable = {};
    for(const id of id_list) {
        reportTable[id] = [];
        reportedTable[id] = 0;
    }
    for(const item of reports){
        let [report, reported] = item.split(' ');
        reportTable[report].push(reported);
        reportedTable[reported] += 1
    }
    const stopped = [] 
    const answer = []
    for(const key in reportedTable){
        let value = reportedTable[key]
        if(value >= k) stopped.push(key)
    }
    for (const id in reportTable){
        let cnt = 0;
        for (const stoppedId of stopped){
            if(reportTable[id].includes(stoppedId)) cnt++;
        }
        answer.push(cnt)
    }
    return answer
}