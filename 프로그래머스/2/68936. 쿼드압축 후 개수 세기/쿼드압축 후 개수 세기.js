function solution(arr) {
    const isAllEqual = (startX, endX, startY, endY) => {
        let checker = arr[startX][startY];
        for (let i = startX; i < endX; i++) {
            for (let j = startY; j < endY; j++) {
                if (arr[i][j] !== checker) return false;
            }
        }
        return checker;
    };
    const dividedRectangle = (startX, endX, startY, endY) => {
        if (startX >= endX || startY >= endY) return;
        let result = isAllEqual(startX, endX, startY, endY);
        if (result !== false) answer[result] += 1;
        else {
            let midX = Math.floor((startX + endX) / 2);
            let midY = Math.floor((startY + endY) / 2);
            dividedRectangle(startX, midX, startY, midY);
            dividedRectangle(startX, midX, midY, endY);
            dividedRectangle(midX, endX, startY, midY);
            dividedRectangle(midX, endX, midY, endY);
        }
    };

    const answer = [0, 0];
    let len = arr.length;
    dividedRectangle(0, len, 0, len);
    return answer;
}