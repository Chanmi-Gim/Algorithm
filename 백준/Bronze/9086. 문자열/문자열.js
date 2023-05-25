const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input.shift()
for(s of input){
    console.log(s[0]+s[s.length-1])
}