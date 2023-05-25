const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = require("fs").readFileSync(filePath).toString().trim();
console.log(input == input.split('').reverse().join('')? 1 : 0)