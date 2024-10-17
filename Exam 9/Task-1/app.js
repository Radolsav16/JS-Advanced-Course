window.addEventListener("load", solve);

function solve() {
  const carModelInput = document.querySelector("#car-model");
  const carYearInput = document.querySelector("#car-year");
  const partNameInput = document.querySelector("#part-name");
  const partNumberInput = document.querySelector("#part-number");
  const conditionInput = document.querySelector("#condition");

  const indfoList = document.querySelector(".info-list");
  const confirmList = document.querySelector(".confirm-list");

  const img = document.querySelector("#complete-img");
  const p = document.querySelector("#complete-text");

  img.style.visability = 'hidden';
  p.textContent = "";

  function clear() {
    carModelInput.value = "";
    carYearInput.value = "";
    partNameInput.value = "";
    partNumberInput.value = "";
    conditionInput.value = "";
  }

  const buttonSubmit = document.querySelector("#next-btn");

  buttonSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    let model = carModelInput.value;
    let carYear = Number(carYearInput.value);
    let partName = partNameInput.value;
    let partNumber = Number(partNumberInput.value);
    let condition = conditionInput.value;

    if (!model || !carYear || !partName || !partNumber || !condition) return;

    if (carYear < 1980 || carYear > 2023) return;

 

    innerFunctionality(model, carYear, partName, partNumber, condition);
    clear();
    buttonSubmit.disabled = true;
  });

  function innerFunctionality(model, carYear, partName, partNumber, condition) {
    const li = document.createElement("li");
    li.className = "part-content";

    const article = document.createElement("article");

    const pModel = document.createElement("p");
    pModel.textContent = `Car Model: ${model}`;

    const pYear = document.createElement("p");
    pYear.textContent = `Car Year: ${carYear}`;

    const pPartName = document.createElement("p");
    pPartName.textContent = `Part Name: ${partName}`;

    const pPartNumber = document.createElement("p");
    pPartNumber.textContent = `Part Number: ${partNumber}`;

    const pCondition = document.createElement("p");
    pCondition.textContent = `Condition: ${condition}`;

    article.appendChild(pModel);
    article.appendChild(pYear);
    article.appendChild(pPartName);
    article.appendChild(pPartNumber);
    article.appendChild(pCondition);

    const buttonEdit = document.createElement("button");
    buttonEdit.textContent = "Edit";
    buttonEdit.className = "edit-btn";

    const buttonContinue = document.createElement("button");
    buttonContinue.textContent = "Continue";
    buttonContinue.className = "continue-btn";

    li.appendChild(article);
    li.appendChild(buttonEdit);
    li.appendChild(buttonContinue);

    indfoList.appendChild(li);

    buttonEdit.addEventListener("click", () => {
      indfoList.removeChild(li);

      carModelInput.value = model;
      carYearInput.value = carYear;
      partNameInput.value = partName;
      partNumberInput.value = partNumber;
      conditionInput.value = condition;

      buttonSubmit.disabled = false;
    });

    buttonContinue.addEventListener("click", () => {
      li.removeChild(buttonEdit);
      li.removeChild(buttonContinue);

      const buttonConfirm = document.createElement("button");
      buttonConfirm.textContent = "Confirm";
      buttonConfirm.className = "confirm-btn";

      const buttonCancel = document.createElement("button");
      buttonCancel.textContent = "Cancel";
      buttonCancel.className = "cancel-btn";

      li.appendChild(buttonConfirm);
      li.appendChild(buttonCancel);

      confirmList.appendChild(li);


      buttonConfirm.addEventListener('click',()=>{
        confirmList.removeChild(li);
        buttonSubmit.disabled = false;
        img.style.visability = 'visible';
        p.textContent = 'Part is Ordered!';
      })

      buttonCancel.addEventListener('click',()=>{
        confirmList.removeChild(li);
        buttonSubmit.disabled = false;

      })
    });
  }
}
