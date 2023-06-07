const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = require("fs").readFileSync(filePath).toString().trim().split(' ').map((x)=> Number(x));
let a = input.splice(0, 3);
let b = input.splice(0, 3);
let answer = []; 
for(let x = -999 ; x <= 999 ; x++){
    for(let y = -999; y <= 999; y++){
        if(a[0]*x + a[1]*y === a[2] && b[0]*x + b[1]*y === b[2]) answer.push(x, y)
    }
}
console.log(answer.join(' '))