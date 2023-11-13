const fibonachi = (num) => {
    if (num === 1 || num === 2) {
        return 1;
    }
    return fibonachi(num - 1) + fibonachi(num - 2);
};

console.log(fibonachi(6));
