const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = require("fs").readFileSync(filePath).toString().trim().split('\n');
input = input.map(x=> x.split(' ').map((el)=> Number(el)));
let [_, m] = input.shift();
input = input.flat()
let answer = [];

for(let i =0; i<input.length; i++){
    for(let j = i+1; j<input.length; j++){
        for(let k = j+1; k<input.length ; k++){
            let sum = input[i]+ input[j] + input[k] 
            if(sum <= m) answer.push(sum)
        }
    }
}
console.log(answer.sort((a, b)=> b-a)[0])