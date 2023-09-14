let arr = [1, 223, 34, 24, 56, 34, 45, 663, 53, 6];

//using max method
function max() {
    let maxarr = Math.max(...arr)
    console.log(maxarr)
}
// max()

// using for looop 
function usingForLoop() {
    let maxarr = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxarr) {
            maxarr = arr[i]
        }
    }
    console.log(maxarr)
}
// usingForLoop()

// using recursive function 
// The slice() method is used to extract a portion of an array and returns a new array with the extracted elements. It takes two optional parameters: start and end, which define the start and end indices of the slice.
function findMax(arrr) {
    if (arrr.length === 1) {
        return arrr[0];
    } else {
        const maxValue = findMax(arrr.slice(1));
        return Math.max(arrr[0], maxValue);
    }

}
const arrr = [1, 2, 30, 4, 5];
// console.log(findMax(arrr)); // 5


// using reduce function
const maxValue = arr.reduce((max, current) => {
    return Math.max(max, current);
});
// console.log(maxValue); // 30

// or
function maxm() {
    let arrss = [1, 2, 30, 4, 5];
    return arrss.reduce((curr, final) => {
        if (curr < final) {
            return final
        }
        else {
            return curr
        }
    })
}

// console.log(maxm())