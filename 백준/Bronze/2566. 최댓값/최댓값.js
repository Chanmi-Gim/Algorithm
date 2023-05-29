const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split('\n')
input = input.map((x)=> x.split(' ').map((el)=>Number(el)));
let max = Math.max(...input.map((x)=> Math.max(...x)))
let 위치 = [];
input.map((row, i)=> row.forEach((col, j)=> {if(col == max) 위치.push(i+1,j+1)}))
console.log(max)
console.log(위치.join(' '))