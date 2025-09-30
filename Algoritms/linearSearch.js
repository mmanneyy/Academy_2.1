const linearSearch = (arr, target) => {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === target) {
            return i;
        }
    }
    return -1;
}

let arr = [9, 1, 7, 6, 10];
let target = 7;
console.log(linearSearch(arr, target));
