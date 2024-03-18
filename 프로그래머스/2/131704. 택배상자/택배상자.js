function solution(order) {
    order.reverse();
    const belt = Array.from({ length: order.length }, (_, i) => i + 1).reverse();
    const stack = [];
    let cnt = 0;
    while (true) {
        if (belt.length === 0 && stack[stack.length - 1] !== order[order.length - 1]) break;
        if (belt.length === 0 && order.length === 0) break;
        if (order[order.length - 1] !== belt[belt.length - 1]) {
            if (stack[stack.length - 1] === order[order.length - 1]) {
                stack.pop();
                order.pop();
                cnt++;
            } else {
                stack.push(belt.pop());
            }
        } else {
            belt.pop();
            order.pop();
            cnt++;
        }
    }
    return cnt;
}
