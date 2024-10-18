const dic = ['A', 'E', 'I', 'O', 'U'];
const words = {}
let count = 0;

const dfs = (v, str) =>{
    if(v > 5) return
    words[str] = count++;
    for(let i = 0; i < dic.length ; i++){
        dfs(v+1, str+dic[i])
    }
}

const solution = (word) =>{
    dfs(0, '')
    return words[word]
}

