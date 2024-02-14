// const solution = (spell, dic) => dic.filter(x=> spell.every(el=> x.includes(el)));

const solution = (spell, dic) => dic.map((word) => spell.every((x)=> word.includes(x))).some((x)=> x === true) ? 1 : 2 ;
