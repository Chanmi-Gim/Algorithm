// function solution(s) {
//     let stack = [];
//     let arr = s.split("");

//     // "("가 없거나 첫 번째에 없는 경우
//     let idx = arr.findIndex((x) => x === "(");
//     if (idx === -1 || idx !== 0) return false;
//     // "("가 있는 경우
//     else {
//         arr = arr.splice(idx, arr.length - idx);
//         arr.map((el) => {
//             if (el === "(") {
//                 stack.push("(");
//             } else {
//                 stack.pop("(");
//             }
//         });
//     }
//     return stack.length === 0
// }

function solution(s) {
    let stack =[]
    let idx = s.indexOf("(")
    if(idx == -1 || idx !== 0) return false
    else{
        s = s.slice(idx)
        for (str of s){
            str== "("? stack.push(1): stack.pop();
        }
        return stack.length === 0
    } 
}