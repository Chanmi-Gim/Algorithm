const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = require("fs").readFileSync(filePath).toString();

console.log(`         ,r'"7
r\`-_   ,'  ,/
 \\. ". L_r'
   \`~\\/
      |
      |`)