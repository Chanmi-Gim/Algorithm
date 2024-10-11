let [_, ...words] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const isPalindrome = (word) => {
    let lp = 0;
    let rp = word.length - 1;
    while (lp < rp) {
        if (word[lp] !== word[rp]) return false;
        lp++;
        rp--;
    }
    return true;
};

words.forEach((word) => {
    let lp = 0;
    let rp = word.length - 1;
    let flag = 0;
    while (lp < rp) {
        if (word[lp] !== word[rp]) {
            if (isPalindrome(word.slice(lp, rp)) || isPalindrome(word.slice(lp + 1, rp + 1))) flag = 1;
            else flag = 2;
            break;
        }
        lp++;
        rp--;
    }
    console.log(flag);
});
