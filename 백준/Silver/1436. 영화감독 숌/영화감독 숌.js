const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = require("fs").readFileSync(filePath).toString().trim()
input = Number(input)
let cnt = 0; 
for(let i = 666 ; i < Infinity; i++){
    if (String(i).includes('666')) cnt++;
    if (cnt === input) {
        console.log(i); 
        break;
    }
}