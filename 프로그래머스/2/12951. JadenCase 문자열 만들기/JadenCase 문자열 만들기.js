const solution = (s) => {
    return s
        .split(' ')
        .map((word) =>
            word
                .split('')
                .map((str, i) => (i === 0 ? str[0].toUpperCase() : str[0].toLowerCase()))
                .join('')
        )
        .join(' ');
};