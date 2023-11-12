const arr = [3, 6, 7, 2, 1];
let count = 0;

function linearSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        count += 1;
        if (array[i] === item) {
            return i;
        }
    }
    return null;
}

console.log(linearSearch(arr, 1));
console.log('iteration count: ', count);

// сложность алторитма O(n)
