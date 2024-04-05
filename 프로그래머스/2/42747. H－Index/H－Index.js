function solution(citations) {
    const answer = Number(citations.sort((a, b) => b - a).findIndex((x, i) => i + 1 > x));
    return answer !== -1 ? answer : citations.length;
}