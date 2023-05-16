function solution(s, skip, index) {
    const alphabet = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
    ];
    const al = alphabet.filter((el) => !skip.split("").includes(el));
    return s
        .split("")
        .map((x) => {
            let idx = al.indexOf(x);
            return al[(idx + index) % al.length];
        })
        .join("");
}