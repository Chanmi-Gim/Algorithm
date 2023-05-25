const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = require("fs").readFileSync(filePath).toString().split('\n');
input.map((el)=> console.log(el))
