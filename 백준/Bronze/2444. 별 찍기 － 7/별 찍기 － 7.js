const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = Number(require("fs").readFileSync(filePath).toString().trim());

for (let i = 1; i< input; i++){
    let blank = " ".repeat(input-i)
    let star = "*".repeat((i+(i-1)))
    console.log(blank+star)
}
for (let j = input ; j >0 ; j--){
    let blank = " ".repeat(input-j);
    let star = "*".repeat(j+(j-1))
    console.log(blank+star)
}