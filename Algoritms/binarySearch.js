const binarySearch = (arr, target) => {
    let low = 0;
    let high = arr.length - 1;
    let mid = Math.floor((high + low) / 2);

    while(low <= high) {
        if(target === arr[mid]) {
            return mid;
        } else if(target < arr[mid]) {
            high = mid - 1;
            mid = Math.floor((high + low) / 2);
        } else {
            low = mid + 1;
            mid = Math.floor((high + low) / 2);
        }
    }
    return -1;
}

let arr = [1, 3, 5, 7, 8, 11];
let target = 7;
console.log(binarySearch(arr, target));
