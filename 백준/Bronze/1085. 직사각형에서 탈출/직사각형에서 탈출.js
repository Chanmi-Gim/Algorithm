const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split(' ')
const [x, y] = [input[0], input[1]];
const [w, h] = [input[2], input[3]];
let stack = [[x,0], [x,h], [0,y], [w,y]];
stack = stack.map((el)=> Math.sqrt(Math.pow(el[0]-input[0], 2)+ Math.pow(el[1]-input[1], 2)))
console.log(Math.min(...stack))