function ariaTriangle() {
  let base = document.getElementById("base").value;
  let height = document.getElementById("height").value;
  let area = (base * height) / 2;
  document.getElementById(
    "result1"
  ).innerText = `aria of ${base} and ${height} is ${area}`;
  let aa = document.getElementById("a").value;
  let bb = document.getElementById("b").value;
  let cc = document.getElementById("c").value;
  let s = (aa + bb + cc) / 2;
  let AreaOfTriangle = Math.sqrt(s * (s - aa) * (s - bb) * (s - cc));
  document.getElementById(
    "result2"
  ).innerText = `aria triangle of ${aa} , ${bb} and ${cc} is ${AreaOfTriangle}`;
}

const btnTriangle = document.getElementById("print_area_triangle");
btnTriangle.addEventListener("click", () => {
  ariaTriangle();
});
