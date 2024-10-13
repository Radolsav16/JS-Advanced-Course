window.addEventListener("load", solve);

function solve() {
  const colorInput = document.querySelector("#colors");
  const modelInput = document.querySelector("#motorcycles");
  const dateInput = document.querySelector("#datetime");
  const fullnameInput = document.querySelector("#full-name");
  const emailInput = document.querySelector("#email");
  const preview = document.querySelector("#preview-list");
  const confirmUl = document.querySelector("#complete-list");
  const dataViewDiv = document.querySelector(".data-view");

  const buttonRide = document.querySelector("#test-ride-btn");

  buttonRide.addEventListener("click", createPreview);

  function clear() {
    colorInput.value = "";
    modelInput.value = "";
    dateInput.value = "";
    fullnameInput.value = "";
    emailInput.value = "";
  }

  function createPreview(e) {
    e.preventDefault();
    let color = colorInput.value;
    let model = modelInput.value;
    let date = dateInput.value;
    let fullname = fullnameInput.value;
    let email = emailInput.value;

    if (!color || !model || !date || !fullname || !email) return;

    createElementsAndAppendIt(color, model, date, fullname, email);
    clear();
    buttonRide.disabled = true;
  }

  function createElementsAndAppendIt(color, model, date, fullname, email) {
    const li = document.createElement("li");
    const article = document.createElement("article");

    const pColor = document.createElement("p");
    pColor.textContent = `Color: ${color}`;

    const pModel = document.createElement("p");
    pModel.textContent = `Model: ${model}`;

    const pfullName = document.createElement("p");
    pfullName.textContent = `For: ${fullname}`;

    const pemail = document.createElement("p");
    pemail.textContent = `Contact: ${email}`;

    const pDate = document.createElement("p");
    pDate.textContent = `Test ride on: ${date}`;

    const div = document.createElement("div");
    div.className = "btn-container";

    const buttonEdit = document.createElement("button");
    buttonEdit.textContent = "Edit";
    buttonEdit.className = "edit-btn";

    const buttonNext = document.createElement("button");
    buttonNext.textContent = "Next";
    buttonNext.className = "next-btn";

    article.appendChild(pColor);
    article.appendChild(pModel);
    article.appendChild(pfullName);
    article.appendChild(pemail);
    article.appendChild(pDate);

    li.appendChild(article);
    div.appendChild(buttonEdit);
    div.appendChild(buttonNext);
    li.appendChild(div);
    preview.appendChild(li);

    buttonEdit.addEventListener("click", () => {
      colorInput.value = color;
      modelInput.value = model;
      dateInput.value = date;
      fullnameInput.value = fullname;
      emailInput.value = email;
      preview.removeChild(li);
      buttonRide.disabled = false;
    });

    buttonNext.addEventListener("click", () => {
      li.removeChild(div);
      const buttonComplete = document.createElement("button");
      buttonComplete.textContent = "Complete";
      buttonComplete.className = "complete-btn";
      article.appendChild(buttonComplete);
      confirmUl.appendChild(li);

      buttonComplete.addEventListener("click", () => {
        confirmUl.removeChild(li);
        const addButton = document.createElement("button");
        addButton.textContent = "Your Test Ride is Confirmed";
        addButton.className = "confirm-btn";
        dataViewDiv.appendChild(addButton);

        addButton.addEventListener("click", () => {
          location.reload();
        });
      });
    });
  }
}
