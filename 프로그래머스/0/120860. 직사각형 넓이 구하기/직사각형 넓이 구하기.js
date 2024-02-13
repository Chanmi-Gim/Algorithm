function solution(dots) {
    const x_list = dots.map((x)=> x[0])
    const y_list = dots.map((y)=> y[1])
    return (Math.max(...x_list) - Math.min(...x_list)) * (Math.max(...y_list) - Math.min(...y_list))
}