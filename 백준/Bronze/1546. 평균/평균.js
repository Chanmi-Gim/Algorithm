const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input.shift();
input = input[0].split(' ').map(x=> Number(x))
const maxScore = Math.max(...input)
for (let i = 0 ; i < input.length ; i++){
    input[i] = input[i]/maxScore *100    
}
console.log(input.reduce((acc, el)=> acc+el, 0)/input.length)