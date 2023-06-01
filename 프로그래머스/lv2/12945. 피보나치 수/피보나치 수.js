function solution(n) {
    const fibonacci = [[1n, 0n], [0n, 1n]]
    for(let i = 2; i <= n; i++){
        fibonacci[i] = [
            BigInt(fibonacci[i-1][0]) + BigInt(fibonacci[i-2][0]),
            BigInt(fibonacci[i-1][1]) + BigInt(fibonacci[i-2][1])
        ]
    }
    return fibonacci[n][1] % 1234567n
}

