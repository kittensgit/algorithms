const arr = [1, 2, 3, 4, 5];
let count = 0;

const recursiveBinarySeacrh = (array, item, start, end) => {
    let middle = Math.floor((start + end) / 2); // index
    count += 1;
    if (item === array[middle]) {
        return middle;
    }
    if (item < array[middle]) {
        return recursiveBinarySeacrh(array, item, start, middle - 1);
    } else {
        return recursiveBinarySeacrh(array, item, middle + 1, end);
    }
};

console.log(recursiveBinarySeacrh(arr, 5, 0, arr.length));
console.log('count:', count);
