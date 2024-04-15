class Node {
    constructor(character) {
        this.character = character;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = new Node(null);
        this.tail = new Node(null);
        this.head.next = this.tail;
        this.tail.prev = this.head;
        this.cursor = this.tail;
    }

    insert(character) {
        const newNode = new Node(character);
        newNode.prev = this.cursor.prev;
        newNode.next = this.cursor;
        this.cursor.prev.next = newNode;
        this.cursor.prev = newNode;
    }

    delete() {
        if (this.cursor.prev !== this.head) {
            this.cursor.prev = this.cursor.prev.prev;
            this.cursor.prev.next = this.cursor;
        }
    }

    moveLeft() {
        if (this.cursor.prev !== this.head) {
            this.cursor = this.cursor.prev;
        }
    }

    moveRight() {
        if (this.cursor !== this.tail) {
            this.cursor = this.cursor.next;
        }
    }

    toString() {
        let result = '';
        let current = this.head.next;
        while (current !== this.tail) {
            result += current.character;
            current = current.next;
        }
        return result;
    }
}

const fs = require('fs');
const [s, m, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const cmd = input.map((item) => item.split(' '));

let editor = new DoublyLinkedList();
for (const char of s) {
    editor.insert(char);
}
editor.moveRight();

for (let i = 0; i < +m; i++) {
    switch (cmd[i][0]) {
        case 'L':
            editor.moveLeft();
            break;
        case 'D':
            editor.moveRight();
            break;
        case 'B':
            editor.delete();
            break;
        case 'P':
            editor.insert(cmd[i][1]);
            break;
    }
}

console.log(editor.toString());
