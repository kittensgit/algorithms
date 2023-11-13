const arr = [5, 8, -1];
let count = 0;

const quickSort = (array) => {
    if (array.length <= 1) {
        return array;
    }
    let indexPivot = Math.floor(array.length / 2);
    let pivot = array[indexPivot];
    let less = [];
    let greater = [];
    for (let i = 0; i < array.length; i++) {
        count += 1;
        if (i === indexPivot) {
            continue;
        }
        if (array[i] < pivot) {
            less.push(array[i]);
        } else {
            greater.push(array[i]);
        }
    }
    return [...quickSort(less), pivot, ...quickSort(greater)];
};

console.log(quickSort(arr));
console.log('count: ', count);
