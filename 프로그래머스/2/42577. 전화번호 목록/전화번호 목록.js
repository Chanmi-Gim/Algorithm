function solution(phone_book) {
    return !phone_book.sort().some((x, i, self)=> self[i+1]?.indexOf(x) === 0)
}

