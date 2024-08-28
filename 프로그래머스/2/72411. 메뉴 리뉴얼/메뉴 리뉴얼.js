function solution(orders, course) {
    const visited = Array.from({length : 10}, ()=> 0);
    const hash = new Map();
    const answer = [];
    const dfs = (v, order, str, idx) =>{
        if(v === 0){
            str = str.split('').sort().join('')
            hash.set(str, (hash.get(str)|| 0) + 1)
            return
        }
        for(let j = idx; j < order.length ; j++){
            if(!visited[j]){
                visited[j] = true;
                dfs(v-1, order, str+ order[j], j+1)
                visited[j] = false;
            }
        }   
    }
    for(let i = 0; i < course.length ; i++){
        for (let j = 0; j < orders.length ; j++){
            dfs(course[i], orders[j], '', 0);
        }
        let val = Math.max(...hash.values())
        if(val >= 2){
            for(const [k, v] of hash){
                if(v == val){
                    answer.push(k);
                }
            }
        }
        hash.clear();
        visited.fill(0);
    }
    return answer.sort()
}