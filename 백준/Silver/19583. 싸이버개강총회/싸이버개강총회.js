const [SEQ, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [start, end, endStreaming] = SEQ.split(' ').map((item) => {
    const [h, m] = item.split(':').map(Number);
    return h * 60 + m;
});
const calculator = (time) => {
    const [h, m] = time.split(':').map(Number);
    return h * 60 + m;
};
const attendance = new Set();
const exit = new Set();
for (let i = 0; i < input.length; i++) {
    const [time, id] = input[i].split(' ');
    const totalTime = calculator(time);
    if (totalTime <= start) attendance.add(id);
    if (totalTime >= end && totalTime <= endStreaming && attendance.has(id)) exit.add(id);
}
const answer = exit.size;
console.log(answer);