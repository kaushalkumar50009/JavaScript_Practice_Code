// ! first way 

const copyBtn = document.getElementById("copy");
const result = document.getElementById("result");

let loremIpsumGene = () => {
    const input = document.getElementById("text").value;
    navigator.clipboard.writeText(input)
};

copyBtn.addEventListener("click", loremIpsumGene)




// ! second way


// let loremIpsumGene = async () => {
//     const input = document.getElementById("text").value;

//     let copy = await navigator.clipboard.writeText(input)

//     console.log(copy);

//     showMessage("Text copied!")

// };

// const defaultBtnText = copyBtn.innerText;
// function showMessage(message) {
//     copyBtn.innerText = message;
//     // setTimeout(() => {
//     //     copyBtn.innerText = defaultBtnText
//     // }, 2000);

//     //! OR

//     setTimeout(() => {
//         copyBtn.innerText = "copy"
//     }, 2000);
// }


// copyBtn.addEventListener("click",
//     loremIpsumGene,
// );

//! third way
// const btn = document.querySelector(".btn");
// const coupon = document.querySelector(".coupon");

// const copyText = (e) => {
//   e.preventDefault();

//   coupon.select();
//   coupon.setSelectionRange(0, 999999);
//   document.execCommand("copy");

//   btn.textContent = "Copied!!!";
//   setTimeout(() => {
//     btn.textContent = "Copy";
//   }, 3000);
// };

// btn.addEventListener("click", copyText);
