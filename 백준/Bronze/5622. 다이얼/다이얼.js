const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = require("fs").readFileSync(filePath).toString().trim()
const phone = ['', ['A','B','C'], ['D','E','F'],['G','H','I'],['J','K','L'],
['M','N','O'],['P','Q','R','S'],['T','U','V'],['W','X','Y','Z']];
let answer = 0;
for (str of input){
    phone.forEach((el, i)=>{
        if(el.includes(str) && i == 0) answer += 2;
        if(el.includes(str) && i != 0) answer += (i+2);
    })
}
console.log(answer)