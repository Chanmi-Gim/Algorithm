function solution(s, n) {
    return s.split('').map((x) => {
        if (x === ' ') return ' '
        let code = x.charCodeAt() ;
        let newCode = (code >= 65 && code <= 90)? ((code + n - 65) % 26) + 65 : ((code + n - 97) % 26) + 97
        return String.fromCharCode(newCode)
    }).join('')                        
}