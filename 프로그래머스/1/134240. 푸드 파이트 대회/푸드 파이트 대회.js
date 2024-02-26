function solution(food) {
    const one = food.map((x, i)=> x % 2 === 0? String(i).repeat(x/2): String(i).repeat(Math.floor((x-1)/2)))
    return one.join('') + '0' + one.reverse().join('')
}