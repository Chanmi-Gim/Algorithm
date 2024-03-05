function solution(a, b, n) {
    let share = 0,
        rest = 0,
        service = 0;
    while (true) {
        if (n <= a) {
            if (n + rest >= a) {
                n += rest;
                rest = 0;
            } else {
                break;
            }
        }
        share = Math.floor(n / a);
        rest += n % a;
        n = share * b;
        service += n;

    }
    return service;
}