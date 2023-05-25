const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = require("fs").readFileSync(filePath).toString().trim().split(' ');
const whitePiece = [1,1,2,2,2,8]
console.log(input.map((x, i)=> x == whitePiece[i]? 0 :whitePiece[i]-x).join(' '))
