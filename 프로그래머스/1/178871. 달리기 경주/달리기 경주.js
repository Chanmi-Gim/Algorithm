function solution(players, callings) {
    let map = new Map()
    players.forEach((x,i)=> map.set(x, i))
    for(let i = 0; i < callings.length ; i++){
        let curr = map.get(callings[i]);
        let pre = map.get(players[curr-1]);
        [players[pre], players[curr]] = [players[curr], players[pre]];
        map.set(players[pre], map.get(players[pre])-1);     
        map.set(players[curr], map.get(players[curr])+1);
    }
    return players
}
