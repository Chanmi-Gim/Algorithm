function solution(a, b, c, d) {
    const arr = [a, b, c, d];
    let map = new Map();
    for (let i = 0; i < 4; i++) map.set(arr[i], map.get(arr[i]) + 1 || 1);
    const arrKeys = Array.from(map.entries())
        .sort((a, b) => b[0] - a[0])
        .sort((a, b) => b[1] - a[1]);
    if (arrKeys.length === 1) {
        return arrKeys[0][0] * 1111;
    } else if (arrKeys.length === 2) {
        return arrKeys[0][1] === 3
            ? (10 * arrKeys[0][0] + arrKeys[1][0]) ** 2
            : (arrKeys[0][0] + arrKeys[1][0]) * (arrKeys[0][0] - arrKeys[1][0]);
    } else if (arrKeys.length === 3) {
        return arrKeys[1][0] * arrKeys[2][0];
    } else {
        return arrKeys[3][0];
    }
}