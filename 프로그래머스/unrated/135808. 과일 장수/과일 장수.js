const solution = (k, m, score) => {
    const lastIdx = ~~(score.sort((a, b) => b - a).length / m) * m;
    const arr = score.slice(0, lastIdx);
    let answer = 0;
    for (let i = 0; i < arr.length; i += m) {
        answer += Math.min(...arr.slice(i, i + m)) * m * 1;
    }
    return answer;
};
