const input = document.getElementById("input"),
    count = document.getElementById("count");

input.addEventListener("keyup", () => {
    count.innerText = input.value.length;
})