function solution(n, words) {
  // 탈락 원인: 끝말잇기 안되는 경우, 단어 중복
  for (let i = 0; i < words.length - 1; i++) {
    if (words[i][words[i].length - 1] !== words[i + 1][0]) {
      // 1. 끝말잇기 안되는 경우
      if (words.slice(0, i + 1).includes(words[i + 1])) {
        return [(i + 1) % n + 1, Math.ceil((i + 2) / n)];
      } else {
        return [(i + 1) % n + 1, Math.ceil((i + 2) / n)];
      }
    } else {
      // 2. 단어 중복
      if (words.slice(0, i + 1).includes(words[i + 1])) {
        return [(i + 1) % n + 1, Math.ceil((i + 2) / n)];
      }
    }
  }
  // 다 통과하는 경우
  return [0, 0];
}

const result = solution(2, ["aba", "aba"]);
console.log(result); // [1, 2]
