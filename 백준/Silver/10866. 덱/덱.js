const [n, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

class Deque {
    constructor() {
        this.data = [];
        this.head = 0;
        this.tail = 0;
    }
    push_front(data) {
        if (this.head !== this.tail) {
            for (let i = this.data.length; i > 0; i--) {
                this.data[i] = this.data[i - 1];
            }
        }
        this.data[this.head] = data;
        this.tail++;
    }
    push_back(data) {
        this.data[this.tail++] = data;
    }
    pop_front() {
        if (this.head === this.tail) return -1;
        return this.data[this.head++];
    }
    pop_back() {
        if (this.head === this.tail) return -1;
        let n = this.data[this.tail - 1];
        this.tail--;
        return n;
    }
    size() {
        return this.tail - this.head;
    }
    empty() {
        return this.tail === this.head ? 1 : 0;
    }
    front() {
        if (this.head === this.tail) return -1;
        return this.data[this.head];
    }
    back() {
        if (this.head === this.tail) return -1;
        return this.data[this.tail - 1];
    }
}
const deque = new Deque();
const answer = [];
for (let i = 0; i < +n; i++) {
    const [cmd, number] = input[i].split(' ');
    if (cmd === 'push_back') deque.push_back(number);
    else if (cmd === 'push_front') deque.push_front(number);
    else if (cmd === 'pop_front') answer.push(deque.pop_front());
    else if (cmd === 'pop_back') answer.push(deque.pop_back());
    else if (cmd === 'size') answer.push(deque.size());
    else if (cmd === 'empty') answer.push(deque.empty());
    else if (cmd === 'front') answer.push(deque.front());
    else answer.push(deque.back());
}
console.log(answer.join('\n'));