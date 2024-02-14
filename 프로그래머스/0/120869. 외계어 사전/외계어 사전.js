// const solution = (spell, dic) => dic.filter(x=> spell.every(el=> x.includes(el)));

const solution = (spell, dic) => dic.filter((word) => spell.every((x)=> word.includes(x))).length ? 1 : 2 ;
