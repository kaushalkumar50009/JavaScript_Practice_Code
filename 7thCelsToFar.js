console.log("celsius to fahrenheit");

function convert() {
  let celcius = document.getElementById("CelsToFar").value;
  let Fahren = celcius * 1.8 + 32;
  document.getElementById("print").innerText = `${Fahren} Fahrenheit`;
}
