const [nm, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = nm.split(' ').map(Number);
const answer = [];
let idx = 0;
const teamToPerson = new Map();
const personToTeam = new Map();

for (let i = 0; i < n; i += 1) {
    let teamName = input[idx++];
    let teamNumber = +input[idx++];
    for (let j = idx; j < idx + teamNumber; j++) {
        teamToPerson.set(teamName, (teamToPerson.get(teamName) || []).concat(input[j]));
        personToTeam.set(input[j], teamName);
    }
    idx += teamNumber;
}
for (let j = idx; j < idx + m * 2; j += 1) {
    let name = input[j++];
    let type = input[j];
    if (type === '0') {
        answer.push(...teamToPerson.get(name).sort());
    } else {
        answer.push(personToTeam.get(name));
    }
}
console.log(answer.join('\n'));