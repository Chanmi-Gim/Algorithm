function solution(keymap, targets) {
    return targets.map((target) => {
        let inspection = target.split("").map((el) => {
            let Indexs = keymap.map((x) => (x = x.indexOf(el))).filter((n) => n !== -1);
            return Indexs.length > 0 ? Math.min(...Indexs) + 1 : -1;
        });
        return inspection.includes(-1) ? -1 : inspection.reduce((acc, el) => acc + el, 0);
    });
}