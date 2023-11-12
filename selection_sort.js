const arr = [5, 7, 3, 2];
let count = 0;

const selectionSort = (array) => {
    for (let i = 0; i < array.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
            count += 1;
        }
        let tmp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = tmp;
    }
    return array;
};

console.log(selectionSort(arr));
console.log('iteration count: ', count);

// сложность O(n^2)
