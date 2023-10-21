const input_count = document.getElementById("input_count");
const countvalue = document.getElementById("countvalue");

input_count.addEventListener("keyup", () => {
  countvalue.innerText = input_count.value.length;
});
