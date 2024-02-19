const dateCirculator = (p, m) => {
    let [year, month, day] = p.split('.').map((x) => Number(x));
    month += m;
    day -= 1;
    if (day === 0) {
        day = 28;
        month -= 1;
    }
    if (month > 12) {
        if (month % 12 === 0) {
            year += month / 12 - 1;
            month = 12;
        } else {
            let addYear = parseInt(month / 12);
            year += addYear;
            month = month % 12;
        }
    }
    console.log('🔥', year, month, day);
    return `${year}.${String(month).padStart(2, '0')}.${String(day).padStart(2, '0')}`;
};

function solution(today, terms, privacies) {
    const answer = [];
    let hash = {};
    for (const term of terms) {
        let [k, v] = term.split(' ');
        hash[k] = +v;
    }
    for (let i = 0; i < privacies.length; i++) {
        let [k, v] = privacies[i].split(' ');
        let result = dateCirculator(k, hash[v]);
        if (result < today) answer.push(i + 1);
    }
    return answer;
}
