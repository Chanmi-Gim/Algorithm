const arr = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [_, roads, countries] = arr.map((x) => x.split(' ').map(Number));

let minValue = Number.MAX_SAFE_INTEGER;
let cost = 0;
countries.forEach((country, i) => {
    if (country < minValue) minValue = country;
    if (i !== countries.length - 1) cost += roads[i] * minValue;
});
console.log(cost);
