let secondLargestArr = [1, 23, 45, 5, 37, 42, 235, 75, 2000, 4, 320, 550]


// using sort 
function findSecondMaxUsingSort() {
    let sorted = secondLargestArr.sort((a, b) => a - b)
    // console.log(sorted)
    let sela = sorted[sorted.length - 2]
    console.log(sela)
}

// findSecondMaxUsingSort()


function ma() {
    let max = 0;
    let secondMax = 0;

    for (let i = 0; i < secondLargestArr.length; i++) {
        if (secondLargestArr[i] > max) {

            secondMax = max; // Store the previous max as the second max

            max = secondLargestArr[i]; // Update the max value

        } else if (secondLargestArr[i] > secondMax && secondLargestArr[i] < max) {
            secondMax = secondLargestArr[i]; // Update the second max value
        }
    }

    console.log(secondMax);
}

ma();
