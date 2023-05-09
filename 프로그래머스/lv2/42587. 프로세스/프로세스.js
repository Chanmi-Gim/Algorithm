function solution(priorities, location) {
    let answer = 0;
    let position = new Array(priorities.length).fill(0);
    position[location] = 1;
    let max = Math.max(...priorities);

    while (priorities.length > 0) {
        let [process, pos] = [priorities.shift(), position.shift()];
        if (process < max) {
            priorities.push(process);
            position.push(pos);
        } else {
            answer++;
            max = Math.max(...priorities);
            if (pos === 1) return answer;
        }
    }
}