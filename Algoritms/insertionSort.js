const insertionSort = (arr) => {
    for(let i = 0; i < arr.length; i++) {
        let curr = arr[i];
        let j = i - 1;

        while(j >= 0 && arr[j] > curr) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = curr;
    }
    return arr;
}

const arr = [2, 7, 5, 3, 9];
console.log(insertionSort(arr));
