// fibonacci series is almost same as swapping of number 


let a = 0
let b = 1

function fiboseq() {
    for (i = 0; i < 10; i++) {
        let temp = a + b
        a = b
        b = temp
        console.log(temp)
    }
}

fiboseq()


// function fiboseqs() {
//     for (i = 0; i < 5; i++) {
//         let temp = a
//         a = b
//         b = temp
//         // console.log(temp)
//         console.log(a)
//         // console.log(b)

//     }
// }

// fiboseqs()