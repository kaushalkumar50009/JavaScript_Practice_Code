console.log("convert kms to miles using function");

function convertToMiles() {
  let kms = document.getElementById("km_to_miles").value;
  const factor = 0.621371;
  let miles = (kms * factor).toFixed(3);
  document.getElementById("res").innerText = `${miles} miles`;
}
