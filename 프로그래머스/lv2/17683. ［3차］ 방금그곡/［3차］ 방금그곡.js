function makeLength(start, end){
    const [startHour, startMin] = [Number(start.slice(0,2)), Number(start.slice(3,5))] 
    const [endHour, endMin] = [Number(end.slice(0,2)), Number(end.slice(3,5))] 
    // 시가 같으면 분으로 계산
    if(startHour === endHour) return endMin - startMin 
    // 시가 다르면 
    else return (endHour - startHour - 1)*60 + (60-startMin) + endMin
}

function equalArray(arr1, arr2){
    if(arr1.length !== arr2.length) return false
    for(let i =0 ; i< arr1.length ; i++){
        if(arr1[i] !== arr2[i]) return false 
    }
    return true
}

function solution(m, musicinfos) {
    const 음 = ["C#","D#","F#","G#","A#","C","D","E","F","G","A","B"]
    let lyrics = [], times =[]
    let answer = new Set(); 
    let reg = RegExp(음.join('|'), 'g')
    musicinfos = musicinfos.map((el)=>el.split(','));
    let lyric = musicinfos.map((el)=> el[3].match(reg));
    for(let i = 0 ; i < musicinfos.length ; i++){
        let j = 0, tmp = [];
        let time = makeLength(musicinfos[i][0], musicinfos[i][1])
        while(j < time){
            tmp.push(lyric[i][j%(lyric[i].length)])
            j++;
        }
        lyrics.push(tmp)
        times.push(time)
    }
    m = m.match(reg)
    lyrics.forEach((el, idx)=>{
        for(let i = 0; i < el.length ; i++){
            if(equalArray(el.slice(i, m.length + i), m)) {
                answer.add([times[idx], musicinfos[idx][2]])
            }
        }
    })
    answer = [...answer].sort((a,b)=> {
        if (a[0] === b[0]) return b.length-a.length
        else return b[0] - a[0] 
    })
    return answer.length === 0 ? "(None)": answer[0][1] 
}