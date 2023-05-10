function solution(bridge_length, weight, truck_weights) {
    const truckOfNum = truck_weights.length;
    let road = [];
    let done = [];
    let answer = 1;
    /**
     * 모든 트럭이 다리를 지나면 while문 종료
     */
    while (done.length !== truckOfNum) {
        let crossingOfWeight = 0;
        // 도로 위 트럭의 weight 총합 구하기
        for (let i = 0; i < Object.keys(road).length; i++) {
            crossingOfWeight += road[Object.keys(road)[i]].truck;
        }
        // 출발 : weight, length 기준점에 부합하면
        if (crossingOfWeight + truck_weights[0] <= weight && road.length + 1 <= bridge_length) {
            let truck = truck_weights.shift();
            road.push({ truck: truck, time: 0 });
        }
        /**
         *  도로 : 1) 경과시간 반영 2) 경과시간이 지나면 done
         * */
        for (let i = 0; i < Object.keys(road).length; i++) {
            road[Object.keys(road)[i]].time++;
        }

        if (road[Object.keys(road)[0]].time >= bridge_length) {
            let doneTruck = road.shift();
            done.push(doneTruck);
        }
        answer++;
    }
    return answer;
}