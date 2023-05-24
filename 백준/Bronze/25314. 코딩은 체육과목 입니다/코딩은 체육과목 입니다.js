const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = Number(fs.readFileSync(filePath).toString().trim());
let answer = "";
while(input>0){
    answer += "long "
    input -= 4;
}
console.log(answer+ "int")