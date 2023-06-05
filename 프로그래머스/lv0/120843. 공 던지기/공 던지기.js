function solution(numbers, k) {
    let idx = (k - 1) * 2;
    while (numbers.length < idx) {
        numbers = numbers.concat(numbers);
    }
    return numbers[(k - 1) * 2];
}