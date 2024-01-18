const findPosition = (number)=>{
    const phone = [[1,2,3],[4,5,6],[7,8,9],["*",0, "#"]]
    for (let i = 0; i < 4 ; i++){
        for(let j = 0; j <3; j++){
            if (phone[i][j] === number){
                return[i, j]
            }
        }
    }
}
const calculateDistance = ([x,y],[currX, currY])=>{
    return Math.abs(x-currX) + Math.abs(y-currY)
}

const compareFn = (number, currLeftHand, currRightHand, hand)=>{
    const equalCondition = hand === 'right'?'R':'L'
    const [currX, currY] = findPosition(number);
    const [leftX, leftY] = findPosition(currLeftHand);
    const [rightX, rightY] = findPosition(currRightHand);
    const distanceWithLeft = calculateDistance([leftX, leftY], [currX, currY])
    const distanceWithRight = calculateDistance([rightX, rightY], [currX, currY])
    return distanceWithLeft > distanceWithRight? "R" :(distanceWithLeft < distanceWithRight?"L": equalCondition)
}

function solution(numbers, hand) {
    let currLeftHand = "*";
    let currRightHand = "#"
    const answer = numbers.map((number)=> {
        if([1,4,7].includes(number)){
            currLeftHand = number
            return "L"
        }else if([3,6,9].includes(number)){
            currRightHand = number
            return "R"
        }else{
            let value = compareFn(number, currLeftHand, currRightHand, hand)
            if (value === 'R'){
                currRightHand=number
            }else{
                currLeftHand= number
            }
            return value
        }
    })
    return answer.join('')
}