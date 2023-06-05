function solution(N, stages) {
    let map = new Map();
    for (let i = 1; i <= N; i++) {
        let mother = stages.filter((x) => x >= i).length;
        let son = stages.filter((x) => x === i).length;
        map.set(i, son / mother);
    }
    const arr = Array.from(map).sort((a, b) => b[1] - a[1]);
    const arr2 = arr.map((el) => el[0]);
    return arr2;
}