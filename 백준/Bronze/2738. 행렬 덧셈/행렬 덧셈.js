const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split('\n')
const [N, _] = input.shift().trim().split(' ').map((x)=>Number(x))
const A = input.splice(0, N).map((x)=>x.split(' ').map((el)=>Number(el)))
const B = input.map((x)=>x.split(' ').map((el)=>Number(el)))
const answer = A.map((x, i)=> x.map((el, j)=> el + B[i][j])).map((x)=> x.join(' ')).join('\n')
console.log(answer)