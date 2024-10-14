window.addEventListener("load", solution);

function solution() {
  const employeInput = document.querySelector("#employee");
  const categoryInput = document.querySelector("#category");
  const urgencyInput = document.querySelector("#urgency");
  const teamInput = document.querySelector("#team");
  const descriptionInput = document.querySelector("#description");
  const buttonAdd = document.querySelector("#add-btn");

  const previewSection = document.querySelector(".preview-list");
  const pendingSection = document.querySelector(".pending-list");
  const resolvedSection = document.querySelector(".resolved-list");

  function clearInput() {
    employeInput.value = "";
    categoryInput.value = "";
    urgencyInput.value = "";
    teamInput.value = "";
    descriptionInput.value = "";
  }

  buttonAdd.addEventListener("click", (e) => {
    e.preventDefault();
    const employe = employeInput.value;
    const category = categoryInput.value;
    const urgency = urgencyInput.value;
    const team = teamInput.value;
    const description = descriptionInput.value;

    if (!employe || !category || !urgency || !team || !description) return;

    createPreviewEl(employe, category, urgency, team, description);
    clearInput();
    buttonAdd.disabled = true;
  });

  function createPreviewEl(...input) {
    const li = document.createElement("li");
    li.className = "problem-content";
    const article = document.createElement("article");

    const pEmployee = document.createElement("p");
    pEmployee.textContent = `From: ${input[0]}`;

    const pCategory = document.createElement("p");
    pCategory.textContent = `Category: ${input[1]}`;

    const pUrgency = document.createElement("p");
    pUrgency.textContent = `Urgency: ${input[2]}`;

    const pTeam = document.createElement("p");
    pTeam.textContent = `Assigned to: ${input[3]}`;

    const pDescription = document.createElement("p");
    pDescription.textContent = `'Description: ${input[4]}'`;

    article.appendChild(pEmployee);
    article.appendChild(pUrgency);
    article.appendChild(pCategory);
    article.appendChild(pTeam);
    article.appendChild(pDescription);

    const buttonEdit = document.createElement("button");
    buttonEdit.textContent = "Edit";
    buttonEdit.className = "edit-btn";

    const buttonCountinue = document.createElement("button");
    buttonCountinue.textContent = "Continue";
    buttonCountinue.className = "continue-btn";

    li.appendChild(article);
    li.appendChild(buttonEdit);
    li.appendChild(buttonCountinue);
    previewSection.appendChild(li);

    buttonEdit.addEventListener("click", () => {
      previewSection.removeChild(li);
      employeInput.value = input[0];
      categoryInput.value = input[1];
      urgencyInput.value = input[2];
      teamInput.value = input[3];
      descriptionInput.value = input[4];
      buttonAdd.disabled = false;
    });

    buttonCountinue.addEventListener("click", () => {
      previewSection.removeChild(li);
      li.removeChild(buttonEdit);
      li.removeChild(buttonCountinue);

      const buttonResolved = document.createElement("button");
      buttonResolved.textContent = "Resolved";
      buttonResolved.className = "resolve-btn";
      li.appendChild(buttonResolved);
      pendingSection.appendChild(li);

      buttonResolved.addEventListener("click", () => {
        pendingSection.removeChild(li);
        li.removeChild(buttonResolved);

        const buttonClear = document.createElement("button");
        buttonClear.textContent = "Clear";
        buttonClear.className = "clear-btn";

        li.appendChild(buttonClear);

        resolvedSection.appendChild(li);

        buttonClear.addEventListener("click", () => {
          buttonAdd.disabled = false;
          resolvedSection.removeChild(li);
        });
      });
    });
  }
}
