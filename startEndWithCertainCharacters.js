let sttr1 = prompt("enter first letter")
let sttr2 = prompt("enter sec letter")


let testStart = sttr1.startsWith("k")
let testend = sttr2.endsWith("l")

if (testStart == true && testend == true) {
    console.log(`${sttr1} start with k and ends with l`)
}
