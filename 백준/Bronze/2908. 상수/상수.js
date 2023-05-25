const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split(' ')
let a = input[0].split('').reduce((acc, el)=>el+ acc, "")
let b = input[1].split('').reduce((acc, el)=>el+ acc, "")
console.log(Math.max(a, b))