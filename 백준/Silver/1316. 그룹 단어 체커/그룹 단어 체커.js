const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input.shift();
let stack = [];
let answer = 0;
input.map((el)=> {
    let my_map = new Map();
    let size = el.length;
    let 중복 = false;
    el.split('').forEach((x)=> {if(!my_map.has(x)) my_map.set(x, true)})
    el.split('').forEach((x, i)=>{
        if(x !== el[i+1] && !my_map.has(x)) 중복 = true;
        if(x !== el[i+1] && my_map.has(x)) my_map.delete(x)
    })
    if(중복 == false) answer++
})
console.log(answer)