const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split(' ')
let [a, b] = [input[0].split(''), input[1].split('')];
console.log(Math.max(a.reverse().join(''), b.reverse().join('')))