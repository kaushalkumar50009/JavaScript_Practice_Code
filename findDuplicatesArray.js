// sort method
function sortedArrayUsingSort() {
    const arr = [10, 2, 30, 5];
    const arr2 = [10, 2, 30, 5];
    let arr1 = arr.sort(); // ["10", "2", "30", "5"]
    let arr3 = arr2.sort((a, b) => a - b); // [2, 5, 10, 30]

    console.log(arr1, arr3)

}
// sortedArrayUsingSort()


// filter method
function filterMethod() {
    let arr = [10, 2, 30, 5, 5, 30, 10];
    let sortedAr = []
    arr.filter((ele, index, array) => {
        if (!sortedAr.includes(ele)) {
            sortedAr.push(ele)
        }
    })
    console.log(sortedAr)

}
// filterMethod()


// forEach method
function forEachMethod() {
    let arr = [10, 2, 30, 5, 5, 30, 10]

    let sortArr = arr.sort((a, b) => a - b)

    let sortedAr = []
    sortArr.forEach((value, index) => {
        if (!sortedAr.includes(value)) {
            sortedAr.push(value)
        }
    })
    console.log(sortedAr)
}
// forEachMethod()

// using a set 
// A Set is a collection of unique values. To remove duplicates from an array, you can first convert the array to a Set. The new Set will implicitly remove duplicate elements. Then, you can convert the Set back to an array.
function usingSet() {
    let arr = [10, 2, 30, 5, 5, 30, 10]

    const set = new Set(arr)
    console.log(set)

    // it will convert back to the array 
    const newAr = Array.from(set)
    console.log(newAr)

}
// usingSet()


// Using a temporary array
// The following example uses a temporary array to remove duplicates from an array.
function usingTempArray() {
    let arr = [10, 2, 30, 5, 5, 30, 10, 4]

    let newArr = []

    for (let i = 0; i < arr.length; i++) {
        if (!newArr.includes(arr[i])) {
            newArr.push(arr[i])
        }
    }

    console.log(newArr)
}

// usingTempArray()

