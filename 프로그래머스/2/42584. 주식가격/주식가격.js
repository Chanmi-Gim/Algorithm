const assert = require("assert");
function solution(prices) {
    const len = prices.length;
    const stack = [];
    prices.map((el, i, arr) => {
        let flag = false;
        for (let j = i + 1; j < prices.length; j += 1) {
            if (el > arr[j]) {
                stack.push(j - i);
                flag = true;
                break;
            }
        }
        if (!flag) {
            stack.push(len - i - 1);
        }
    });
    return stack;
}