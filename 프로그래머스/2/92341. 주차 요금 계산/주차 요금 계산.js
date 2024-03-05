/** 시간 계산기 : 시간을 분단위로 바꿔준다. */
const timeCalculator = (a, b) => {
    let [am, as] = a.split(':').map(Number);
    let [bm, bs] = b.split(':').map(Number);
    as = am * 60 + as;
    bs = bm * 60 + bs;
    return as > bs ? as - bs : bs - as;
};

/** 누적 주차시간 계산기
 - 같은 번호로 된 게 짝수인지 홀수인지 확인한다. 홀수면 마지막에 23:59 OUT을 추가해준다.
 - 뒤에서부터 시간을 빼준다.
 - 빼준 시간의 누적합을 구한다.
 - 같은 번호별 누적합을 배열 형태로 리턴한다.
 */
const accumulatedTimeCalculator = (records) => {
    const arr = records.map((r) => r.split(' ')).sort((a, b) => a[1] - b[1]);
    const carNumberSet = Array.from(new Set(arr.map((x) => x[1])));
    const timeTable = [];
    for (let i = carNumberSet.length - 1; i >= 0; i--) {
        let acc = 0;
        for (let j = arr.length - 1; j >= 0; j -= 1) {
            if (carNumberSet[i] !== arr[j][1]) continue;
            if (carNumberSet[i] === arr[j][1]) {
                if (arr[j][2] === 'IN' && acc === 0) {
                    acc += timeCalculator('23:59', arr[j][0]);
                    continue;
                }
                acc += timeCalculator(arr[j][0], arr[j - 1][0]);
                j -= 1;
            }
        }
        timeTable.push(acc);
    }
    return timeTable.reverse();
};

/** 주차요금 계산기 
 - 기본 시간 이하이면 기본요금 * 누적합을 해주고,
 - 기본 시간 이상이면 기본요금 + (Math.ceil((누적합 - 기본시간)/단위시간)) * 단위요금 하여 출력한다.
*/
const parkingFeeCalculator = (fees, timeTable) => {
    let [defaultTime, defaultFee, unitTime, unitFee] = fees;
    return timeTable.map((time) =>
        time > defaultTime ? defaultFee + Math.ceil((time - defaultTime) / unitTime) * unitFee : defaultFee
    );
};

function solution(fees, records) {
    // 누적 시간을 계산한다.
    const accumulatedTimeTable = accumulatedTimeCalculator(records);
    // 누적 시간을 이용하여 주차요금을 계산한다.
    return parkingFeeCalculator(fees, accumulatedTimeTable);
}