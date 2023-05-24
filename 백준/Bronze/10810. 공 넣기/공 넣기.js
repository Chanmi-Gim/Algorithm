const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split('\n')
input = input.map(x=> x.split(' ').map(x=> Number(x)))
const [len, idx] = input.shift()
let burket = new Array(len).fill(0);
for (const [start, end, fillNumber] of input){
    burket.fill(fillNumber, start-1, end)
}
console.log(burket.join(' '))