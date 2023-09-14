let comA = [1, 2, 3, 4, 5, 6]
let comB = [6, 5, 4, 3, 2, 1]

// indeOf method return -1  if element is not exist in array 
//every method check every and each element fulfill the condition exist in array

function compare() {
    const sameArr = comA.length == comB.length && comA.every((ele) => {
        if (comB.indexOf(ele) > -1) {
            return (ele = [comB.indexOf(ele)])
        }
    })
    console.log(sameArr)
}

compare()