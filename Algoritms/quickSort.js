const quickSort = (arr, low, high) => {
    if(low < high) {
    let pi = partition(arr, low, high);
    quickSort(arr, low, pi );
    quickSort(arr, pi + 1, high);

    }
    return arr;
}

function isSorted (arr) {
    for(let i = 0; i <= arr.length - 1; i++) {
        if(arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
}


// const randomElem = (low, high) =>{
//     return low + Math.floor(Math.random() * (high - low));
// }

const partition = (arr, low, high) => {
    let pivot = arr[low];
    // console.log(pivot);
    
    let i = low;
    let j = high;

    while(i < j) {
        do {
            i++;
        } while(arr[i] <= pivot && i < high);

        do {
            j--;
        } while(arr[j] > pivot && j > low);

        if(i < j) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }   
    
    [arr[j], arr[low]] = [arr[low], arr[j]];
    return j;
}

let arr = [24, 8, 9, 12, 10, 6, 3, 15];
console.log(quickSort(arr, 0, arr.length));
console.log(isSorted(arr));
