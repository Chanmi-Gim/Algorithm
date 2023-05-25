const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const str = input.shift();
const idx = input.pop();
console.log(str[idx-1])
