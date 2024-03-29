function solution(park, routes) {
    
    // 초기 변수 설정
    const cmd = { N: [-1, 0], S: [1, 0], W: [0, -1], E: [0, 1] };
    const HEIGHT = park.length - 1;
    const WIDTH = park[0].length - 1;

    // 시작 인덱스 구하기
    let sx = 0,
        sy = 0;
    for (let i = 0; i < park.length; i++) {
        let y = park[i].indexOf('S');
        if (y !== -1) (sx = i), (sy = y);
    }

    // 명령어 실행
    for (const route of routes) {
        let [d, times] = route.split(' ');
        let x = sx + cmd[d][0];
        let y = sy + cmd[d][1];
        let flag = false;
        for (let j = 0; j < times; j++) {
            if (x > HEIGHT || y > WIDTH || x < 0 || y < 0 || park[x][y] === 'X') {
                flag = true;
                break;
            } else {
                x += cmd[d][0];
                y += cmd[d][1];
            }
        }
        if (!flag) {
            sx += cmd[d][0] * times;
            sy += cmd[d][1] * times;
        }
    }
    return [sx, sy];
}
