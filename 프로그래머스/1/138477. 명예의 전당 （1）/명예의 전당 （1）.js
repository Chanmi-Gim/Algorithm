const solution = (k, score) => {
    return score.map((_, i)=> {
        let n = score.slice(0, i+1).sort((a, b)=> b - a);
        return i < k ? Math.min(...n) : n[k-1]
    })
}