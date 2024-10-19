const convertTimeToMinutes = (time) => {
    const [hour, minute] = time.split(':').map(Number);
    return hour * 60 + minute;
};

function solution(book_time) {
    const convertedTime = book_time.map(([sT, eT]) => {
        const startTime = convertTimeToMinutes(sT);
        const endTime = convertTimeToMinutes(eT);
        return [startTime, endTime];
    });
    convertedTime.sort((a, b) => a[0] - b[0]);
    const rooms = [];

    let pointer = 0;
    let result = 0;
    convertedTime.forEach(([startTime, endTime]) => {
        let allocated = false;
        for (let i = 0; i < rooms.length; i++) {
            if (rooms[i] <= startTime) {
                rooms[i] = endTime + 10;
                allocated = true;
                break;
            }
        }
        if (!allocated) {
            rooms.push(endTime + 10);
        }
    });
    return rooms.length;
}
