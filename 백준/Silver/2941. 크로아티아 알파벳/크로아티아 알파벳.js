const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = require("fs").readFileSync(filePath).toString().trim();
const alphabet = [['dž','dz='],['lj','lj'],['nj','nj'],['č','c='],
['ć','c-'],['đ','d-'],['š','s='],['ž','z=']];
let answer = 0;
alphabet.forEach((x)=> {
    let reg = new RegExp(`${x[1]}`,'g')
    if(reg.test(input)){
        let 중복 = input.match(reg);
        input = input.replace(reg, ' ')
        answer+= 중복.length;
    }
})
console.log(input.replace(/\s/g, '').length + answer)