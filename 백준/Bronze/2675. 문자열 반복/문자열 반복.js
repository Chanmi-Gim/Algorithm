const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let inputs = fs.readFileSync(filePath).toString().trim().split('\n')
inputs.shift()
inputs = inputs.map((x)=> x.split(' '))
for (const [len, str] of inputs){
    let answer = "";
    for (s of str){
        answer += s.repeat(len);
    }
    console.log(answer)
}
