const solution = (n, left, right) => {
    const arr = [];
    for (let i = left; i <= right; i += 1) arr.push(Math.max((i % n) + 1, Math.floor(i / n) + 1));
    return arr;
};


// 시간초과
// const solution = (n, left, right) => {
//     const arr = Array.from({ length: n }, () => new Array(n).fill(0));
//     arr.forEach((x, i) => x.forEach((el, j) => (arr[i][j] = i >= j ? i + 1 : j + 1)));
//     return arr.flat().slice(left, right + 1);
// };

// 시간초과
// const solution = (n, left, right) => {
//     const arr = [];
//     let cnt = 0;
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n; j++) {
//             if (cnt >= left && cnt <= right) arr.push(i >= j ? i + 1 : j + 1);
//             cnt++;
//         }
//     }
//     return arr;
// };