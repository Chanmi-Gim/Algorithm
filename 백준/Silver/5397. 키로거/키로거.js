const fs = require('fs');
let [_, ...input] = fs.readFileSync('dev/stdin').toString().trim().split('\n');
input.forEach((item) => {
    const front = [];
    const back = [];
    for (const s of item) {
        if (s === '<') {
            if (front.length > 0) back.push(front.pop());
        } else if (s === '>') {
            if (back.length > 0) front.push(back.pop());
        } else if (s === '-') {
            if (front.length) front.pop();
        } else {
            front.push(s);
        }
    }
    console.log(front.join('') + back.reverse().join(''));
});