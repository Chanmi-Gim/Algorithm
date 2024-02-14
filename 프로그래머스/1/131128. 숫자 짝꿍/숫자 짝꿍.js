const solution = (x, y) => {
    let answer = ''
    const x_list = Array.from({length : 10}, (_)=> 0)
    const y_list = Array.from({length : 10}, (_)=> 0)
    for (let i = 0; i < x.length ; i++) x_list[x[i]] += 1
    for (let i = 0; i < y.length ; i++) y_list[y[i]] += 1    
    for (let i = 9; i >= 0; i--){
        if(x_list[i] && y_list[i]) {
            let repeatedNum = Math.min(x_list[i], y_list[i])
            answer += String(i).repeat(repeatedNum)
        }
    }
    return answer === ''? '-1': (answer[0] === '0'? '0': answer)
}

// const solution = (x, y) => { 
//     let str = '';
//     for(let i = 0; i < x.length ; i++){
//         let idx = y.indexOf(x[i]);
//         if(idx === -1) continue; 
//         str += x[i];
//         y = y.replace(x[i], '');
//     }
//     return str === ''? '-1': ((str.split('').every((x)=>x ==='0'))? '0': str.split('').sort((a,b)=> b - a).join(''));
// }


// const solution = (x, y) => { 
//     const answer = [];
//     for(let i = 0; i < x.length ; i++){
//         let idx = y.indexOf(x[i]);
//         if(idx === -1) continue; 
//         answer.push(x[i]);
//         y = y.replace(x[i], '')
//     }
//     return answer.length === 0 ? "-1" : (answer.every((x)=> x === '0')? "0" : answer.sort((a, b)=> b - a).join(''))
// }


// const solution = (x, y) => { 
//     const arr = y.split('');
//     const answer = [];
//     for(let i = 0; i < x.length ; i++){
//         let idx = arr.indexOf(x[i]);
//         if(idx === -1) continue; 
//         answer.push(x[i]);
//         arr.splice(idx, 1);
//     }
//     return answer.length === 0 ? "-1" : (answer.every((x)=>x==='0')? "0" : answer.sort((a,b)=> b-a).join(''))
// }
