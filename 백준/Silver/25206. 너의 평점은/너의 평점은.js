const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = require("fs").readFileSync(filePath).toString().trim().split('\n');
const subjectScore = [['A+',4.5],['A0',4.0],['B+',3.5],['B0',3.0],['C+',2.5],['C0',2.0],['D+',1.5],['D0',1.0],['F',0.0]]
let [전공과목별합, 학점총합] = [0, 0];
input = input.map((x)=> x.split(' ').splice(1, 2)).map((x)=> [Number(x[0]), x[1]]).filter((x)=> x[1] !=='P');
input.forEach((subject)=> {
    let 과목평점 = subjectScore.filter((el)=>el[0] == subject[1]).flat()
    전공과목별합 += subject[0] * 과목평점[1] 
    학점총합 += subject[0]
})
console.log((전공과목별합/학점총합).toFixed(6))