const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = require("fs").readFileSync(filePath).toString().trim();
let countingStr = new Map();
let count = 0; 
input.split('').map((x)=>x.toUpperCase()).map((x)=> countingStr.set(x, countingStr.get(x)+1 || 1))
let entries = Array.from(countingStr.entries())
let [maxKey, maxValue] = entries.reduce((acc, [elKey, elValue])=>{
    return elValue > acc[1]? [elKey, elValue]:acc;
}, ["", -Infinity]);
entries.forEach((x)=> {
    if(x[1] == maxValue) count++
})
console.log(count>1?"?":maxKey)