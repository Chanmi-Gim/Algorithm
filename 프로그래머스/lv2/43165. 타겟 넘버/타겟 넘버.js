function solution(numbers, target) {
    let answer = 0;
    let len = numbers.length;
    function DFS(v, sum){
        if(v === len){
            if(sum > target) return
            if(sum === target) answer++; 
        }else{
            DFS(v+1, sum + numbers[v])
            DFS(v+1, sum - numbers[v]) 
        }
    }
    DFS(0, 0)
    return answer
}