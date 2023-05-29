const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split('\n')
input.shift();
let 색종이 = new Array(100).fill(0).map(el=> new Array(100).fill(false))
input = input.map((x)=>x.split(' ').map((el)=>Number(el)))
for (let i = 0; i< input.length ; i++){
    let col = input[i][0]
    let row = input[i][1]
    for (let j = 0 ; j <10 ; j++){
        for(let k =0; k< 10 ; k++){
            색종이[col+j][row+k] = true
        }
    }
}
let answer = 색종이.reduce((acc, el)=> {
    for(const s of el){
        if(s) acc++;
    }
    return acc
}, 0)
console.log(answer)