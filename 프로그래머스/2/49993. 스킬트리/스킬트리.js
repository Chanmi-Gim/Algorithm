function solution(skill, skill_trees) {    
    return skill_trees.map((tree, i)=> tree.split('').map((str)=> skill.indexOf(str))).map((tree)=> tree.filter((x)=> x !== -1)).map((x)=> x.every((el, i)=> el === i)).filter((x)=> x === true).length
    
}