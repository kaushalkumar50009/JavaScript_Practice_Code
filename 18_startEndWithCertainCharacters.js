function findStartEnd() {
  const sttr1 = document.getElementById("startWith").value;
  const sttr2 = document.getElementById("endWith").value;
  let testStart = sttr1.startsWith("k");
  let testend = sttr2.endsWith("l");

  if (testStart == true && testend == true) {
    console.log();
    document.getElementById(
      "startwith"
    ).innerText = `first word ${sttr1} start with K and second word ${sttr2} ends with L`;
  } else {
    document.getElementById(
      "startwith"
    ).innerText = `first word ${sttr1} should start with K and second word ${sttr2} should ends with L`;
  }
}
