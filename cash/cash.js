const cashFunction = (fn) => {
    let cash = {};
    return function (n) {
        if (cash[n]) {
            console.log('взято из кеша', cash[n]);
            return cash[n];
        }
        let result = fn(n);
        console.log('выполнено функцией', result);
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

const cashFactorial = cashFunction(factorial);
cashFactorial(5);
cashFactorial(5);
cashFactorial(1);
cashFactorial(1);
cashFactorial(4);
