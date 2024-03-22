function solution(users, emoticons) {
    const discount = [10, 20, 30, 40]
    const discountSet = [];
    const answer = []
    const dfs = (v) => {
        if(v === emoticons.length) {
            let discountAmount = [];
            for(let i = 0; i < emoticons.length ; i++){
                discountAmount.push(emoticons[i] - (emoticons[i] * discountSet[i] * 0.01))
            }
            let signUpTotal = 0;
            let moneyTotal = 0;
            for(let j = 0; j < users.length; j++){
                let signUp = 0;
                let money = 0;
                for(let k = 0; k < discountAmount.length ; k++){
                    if(users[j][0] <= discountSet[k]){
                        money += discountAmount[k]
                        if(money >= users[j][1]){
                            signUp++
                            money = 0;
                            break;
                        }
                    } 
                }
                signUpTotal += signUp
                moneyTotal += money
              
            }
            answer.push([signUpTotal, moneyTotal])
            return
        }
        for(let i = 0; i < discount.length; i++){
            discountSet.push(discount[i])
            dfs(v+1)
            discountSet.pop()
        }

    }
    dfs(0)
    return answer.sort((a, b)=> {
        if(a[0] !== b[0]) return b[0] - a[0]
        else return b[1] - a[1]
    })[0]
}
    
