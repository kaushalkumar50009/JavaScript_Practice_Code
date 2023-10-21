console.log("convert kms to miles using function");

function convert() {
  let kms = document.getElementById("data").value;
  const factor = 0.621371;
  let miles = (kms * factor).toFixed(3);
  document.getElementById("res").innerText = `${miles} miles`;
}
