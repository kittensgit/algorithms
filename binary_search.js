const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let count = 0;

const binarySearch = (array, item) => {
    let start = 0;
    let end = array.length;
    let middle;
    let found = false;
    let position = -1;

    while (found === false && start <= end) {
        count += 1;
        middle = Math.floor((end + start) / 2);
        if (array[middle] === item) {
            found = true;
            position = middle;
            return position;
        }
        if (item < array[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
    }
    return position;
};

console.log(binarySearch(arr, 9));
console.log('iteration count: ', count);
