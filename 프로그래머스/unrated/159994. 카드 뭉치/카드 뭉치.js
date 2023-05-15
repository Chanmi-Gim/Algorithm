
function solution(cards1, cards2, goal) {
    let idx = 0;
    for (let i = 0; i < goal.length; i++) {
        if (goal[i] === cards1[i]) {
            goal.shift();
            cards1.shift();
        } else {
            if (goal[i] === cards2[idx]) {
                goal.shift();
                cards2.shift();
            } else {
                return "No";
            }
        }
        i -= 1;
    }
    return "Yes";
}