const quickSort = (arr, low, high) => {
    if(low < high) {
        let pi = partition(arr, low, high);
        quickSort(arr, low, pi);
        quickSort(arr, pi + 1, high);
    }
    return arr;
}

const medianOfThree = (arr, low, high) => {
    let mid = Math.floor((low + high - 1) / 2);
    let medianIdx = 0;
    let l = arr[low];
    let m = arr[mid];
    let h = arr[high - 1];

    if((l >= m && l <= h) || (l <= m && l >= h)) {
        medianIdx = low;
    } else if((m >= l && m <= h) || (m <= l && m >= h)) {
        medianIdx = mid;
    } else {
        medianIdx = high - 1;
    }

    return medianIdx;
}

const partition = (arr, low, high) => {
    let medianIdx = medianOfThree(arr, low, high);

    [arr[low], arr[medianIdx]] = [arr[medianIdx], arr[low]];
    let pivot = arr[low];
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

