function solution(operations) {
    let queue = [];
    operations.forEach((x) => {
        if (x.split(" ")[0] === "I") {
            // 요소 삽입 후 내림차순 정렬
            queue.push(parseInt(x.split(" ")[1]));
            queue.sort((a, b) => b - a);
        } else if (x.split(" ")[0] === "D" && x.split(" ")[1] === "1") {
            //최댓값 제거
            queue.shift();
        } else {
            // 최솟값 제거
            queue.pop();
        }
    });
    return queue.length !== 0 ? [Math.max(...queue), Math.min(...queue)] : [0, 0];
}