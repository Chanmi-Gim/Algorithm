const [T, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let line = 0;
let idx = 0;
const input = arr.map((item) => item.split(' ').map(Number));

const answer = [];

while (line < +T) {
    const [V, E] = input[idx++];
    const len = idx + E;
    const graph = Array.from({ length: V + 1 }, () => []);
    for (idx; idx < len; idx++) {
        const [n1, n2] = input[idx];
        graph[n1].push(n2);
        graph[n2].push(n1);
    }
    const groupChecked = Array.from({ length: V + 1 }, () => 0);
    let found = false;
    for (let node = 1; node <= V; node++) {
        if (groupChecked[node] === 0) {
            const queue = [node];
            groupChecked[node] = 1;
            while (queue.length) {
                const curNode = queue.shift();
                for (const adjNode of graph[curNode]) {
                    if (!groupChecked[adjNode]) {
                        groupChecked[adjNode] = -groupChecked[curNode];
                        queue.push(adjNode);
                    } else if (groupChecked[curNode] === groupChecked[adjNode]) {
                        found = true;
                        break;
                    }
                }
                if (found) break;
            }
            if (found) break;
        }
    }
    answer.push(found ? 'NO' : 'YES');
    line += 1;
}

console.log(answer.join('\n'));

