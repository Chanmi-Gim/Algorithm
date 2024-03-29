const n = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
class Queue {
    constructor() {
        this.data = [];
        this.head = 0;
        this.tail = 0;
    }
    push(data) {
        this.data[this.tail++] = data;
    }
    shift() {
        return this.data[this.head++];
    }
    size() {
        return this.tail - this.head;
    }
    front() {
        return this.data[this.head];
    }
}
const queue = new Queue();
for (let i = 1; i <= +n; i++) queue.push(i);

while (queue.size() > 1) {
    queue.shift();
    let s = queue.shift();
    queue.push(s);
}
console.log(queue.front());