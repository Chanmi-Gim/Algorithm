const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split('\n').map((x)=> x.split(''))
let str = "";
let maxLen = Math.max(...input.map((x)=> x.length))
for(let i =0; i< maxLen ; i++){
    for(let j = 0; j< input.length ;j++){
        if(input[j][i] !== undefined) str += input[j][i]
    }
}
console.log(str)