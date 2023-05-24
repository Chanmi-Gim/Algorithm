const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = input.map(x=> x.split(' ').map(x=> Number(x)))
const [len, _] = input.shift();
let burket = new Array(len).fill(0).map((_,i) => i+1)
for (const [start, end] of input){
    burket.splice(start-1, end-start+1, ...burket.slice(start-1, end).reverse());
}
console.log(burket.join(' '))