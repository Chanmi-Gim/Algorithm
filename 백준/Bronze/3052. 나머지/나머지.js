const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let array =[]; 
input.forEach(x=> array.push(x%42))
console.log(new Set(array).size)
