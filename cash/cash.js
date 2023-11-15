const cashFactorial = (fn) => {
    const cash = {}; // хранит в себе результаты кеширования(в данном случае ключом будет тот самый параметр n, который мы передаем в ф-ию)
    return function (n) {
        if (cash[n]) {
            return cash[n];
        }
        let result = fn(n);
        cash[n] = result;
        return result;
    };
};

const factorial = (n) => {
    let result = 1;
    while (n !== 1) {
        result *= n;
        n -= 1;
    }
    return result;
};
