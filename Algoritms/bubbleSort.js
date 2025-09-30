const bubbleSort = (arr) => {
    for(i = 0; i < arr.length - 1; i++) {
        for(j = 0; j <= arr.length - 1 - i; j++) {
            if(arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    return arr;
}

const arr = [9, 1, 7, 2, 3, 6];
console.log(bubbleSort(arr));
