const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = require("fs").readFileSync(filePath).toString().trim().split('\n');
input.shift();
input = input.map((x)=>x.split(' ')).map((x)=>x.map(el=> Number(el)))
for (let i =0; i< input.length; i++){
    input[i].shift();
    const avg = input[i].reduce((acc, el)=> acc+el, 0)/input[i].length
    let passingStu = 0;
    input[i].map((x)=> {if(x>avg) passingStu++})
    console.log((passingStu/input[i].length*100).toFixed(3)+"%")
}