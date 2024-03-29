const [n, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

class Queue {
    constructor() {
        this.data = [];
        this.head = 0;
        this.tail = 0;
    }
    push(data) {
        this.data[this.tail++] = data;
    }
    pop() {
        if (this.head === this.tail) return '-1';
        let p = this.data[this.head];
        this.head++;
        return p;
    }
    size() {
        return this.tail - this.head;
    }
    empty() {
        return this.tail - this.head === 0 ? '1' : '0';
    }
    front() {
        if (this.tail === this.head) return '-1';
        return this.data[this.head];
    }
    back() {
        if (this.tail === this.head) return '-1';
        return this.data[this.tail - 1];
    }
}

const queue = new Queue();
const answer = [];
for (let i = 0; i < +n; i++) {
    const [cmd, number] = input[i].split(' ');
    if (cmd === 'push') queue.push(number);
    else if (cmd === 'pop') answer.push(queue.pop());
    else if (cmd === 'size') answer.push(queue.size());
    else if (cmd === 'empty') answer.push(queue.empty());
    else if (cmd === 'front') answer.push(queue.front());
    else answer.push(queue.back());
}
console.log(answer.join('\n'));
