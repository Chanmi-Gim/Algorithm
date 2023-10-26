function solution(prices) {
    const len = prices.length;
    return prices.map((el, i, arr) => {
        const newArr = arr.slice(i);
        const condition = newArr.findIndex((x) => el > x);
        if (condition === -1) return len - i - 1;
        for (let j = i + 1; j < arr.length; j += 1) {
            if (el > arr[j]) return j - i;
        }
    });
}