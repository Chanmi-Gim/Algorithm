const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split(' ').map((x)=>Number(x));;
const array = new Array(8).fill(0).map((_ ,i)=> i+1)
if(input[0] == 8){
    if(array.reverse().every((x,i)=> x ==input[i])) console.log("descending")
    else{console.log("mixed")}
}else if(input[0] == 1){
    if(array.every((x,i)=>x == input[i])) console.log("ascending")
    else{console.log("mixed")}
}else{console.log("mixed")}