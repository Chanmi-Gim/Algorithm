function solution(order) {
    order.reverse();
    const arr = Array.from({ length: order.length }, (_, i) => i + 1).reverse();
    const stack = [];
    let cnt = 0;
    while (true) {
        if (arr.length === 0 && stack[stack.length - 1] !== order[order.length - 1]) break;
        if (arr.length === 0 && order.length === 0) break;
        if (order[order.length - 1] !== arr[arr.length - 1]) {
            if (stack[stack.length - 1] === order[order.length - 1]) {
                stack.pop();
                order.pop();
                cnt++;
            } else {
                let shift = arr.pop();
                stack.push(shift);
            }
        } else {
            arr.pop();
            order.pop();
            cnt++;
        }
    }
    return cnt;
}