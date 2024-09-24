function solve() {
  const numberInput = document.querySelector("#input");
  const menuTo = document.querySelector("#selectMenuTo");
  const output = document.querySelector("#result");
  const button = document.querySelector("#container button");

  const optionToHex = document.createElement("option");
  optionToHex.setAttribute("value", "hexadecimal");
  optionToHex.textContent = "Hexadecimal";

  const optionToBinary = document.createElement("option");
  optionToBinary.setAttribute("value", "binary");
  optionToBinary.textContent = "Binary";

  menuTo.appendChild(optionToHex);
  menuTo.appendChild(optionToBinary);

  button.addEventListener("click", () => {
    const num = Number(numberInput.value);
    const pickedOperation = menuTo.value;
    let outputNum = "";

    if (pickedOperation === "hexadecimal") {
      outputNum = num.toString(16).toUpperCase();
      output.value = outputNum;
    } else if (pickedOperation === "binary") {
      outputNum = num.toString(2);
      output.value = outputNum;
    }
  });
}
