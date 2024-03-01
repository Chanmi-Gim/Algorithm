function solution(babbling) {
    const possible = /(aya)|(ye)|(woo)|(ma)/g
    const diff = /(ayaaya)|(yeye)|(woowoo)|(mama)/ 
    return babbling.filter((word) => diff.test(word)? false : (word.replace(possible, '') === ''? true : false)).length    
}