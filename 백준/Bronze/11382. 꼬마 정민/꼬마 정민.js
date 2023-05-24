const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split(' ');

console.log(input.map(x=> Number(x)).reduce((acc, el)=> acc+el, 0))