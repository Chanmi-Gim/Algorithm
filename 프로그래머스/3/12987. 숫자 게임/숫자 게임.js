function solution(A, B) {
    A.sort((a, b) => a - b);
    B.sort((a, b) => a - b);
    let cnt = 0;
    let lp = 0;
    let rp = 0;
    while (rp < A.length) {
        if (A[lp] < B[rp]) {
            cnt++;
            lp++;
            rp++;
        } else {
            rp++;
        }
    }
    return cnt;
}
