const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = input.map(x=> x.split(' ').map(x=> Number(x)))
const [len, _] = input.shift()
const burket = new Array(len).fill(0).map((_,i)=>i+1);
for (const[ball1, ball2] of input){
    
    [burket[ball1-1], burket[ball2-1]] = [burket[ball2-1], burket[ball1-1]]
}
console.log(burket.join(' '))