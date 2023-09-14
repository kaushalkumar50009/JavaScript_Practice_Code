let num = 20

function factor() {
    for (i = 0; i <= num; i++) {
        if (num % i == 0) {
            console.log(i);
        }

    }
}

factor()

// merged two array 

let arr1 = [1, 2, 3, 4, 5,]
let arr2 = [34, 65, 86, 3, 47, 28, 3]

// let c = [...arr1, ...arr2]
let c = arr1.concat(arr2)
console.log(c);

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

let mergedArray = [];

for (let i = 0; i < array1.length; i++) {
    mergedArray.push(array1[i]);
}

for (let i = 0; i < array2.length; i++) {
    mergedArray.push(array2[i]);
}


//swap two number

[arr1, arr2] = [arr2, arr1]

console.log(arr1, arr2);
