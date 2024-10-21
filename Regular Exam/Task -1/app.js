window.addEventListener("load", solve);

function solve() {
  const typeInput = document.querySelector("#type");
  const intesityInput = document.querySelector("#intensity");
  const caloriesBurnedInput = document.querySelector("#calories");
  const durationInput = document.querySelector("#duration");
  const dateInput = document.querySelector("#date");

  const preview = document.querySelector("#preview-activity");
  const table = document.querySelector("#activities-table");
  const buttonAdd = document.querySelector("#add-activity");

  function clear() {
    typeInput.value = "";
    intesityInput.value = "";
    caloriesBurnedInput.value = "";
    durationInput.value = "";
    dateInput.value = "";
  }

  buttonAdd.addEventListener("click", (e) => {
    e.preventDefault();
    let type = typeInput.value;
    let intesity = intesityInput.value;
    let caloriesBurned = caloriesBurnedInput.value;
    let duration = durationInput.value;
    let date = dateInput.value;

    if (!type || !intesity || !caloriesBurned || !duration || !date) return;

    createInnerFunctionality(type, intesity, caloriesBurned, duration, date);
    clear();
    buttonAdd.disabled = true;
  });

  function createInnerFunctionality(
    type,
    intesity,
    caloriesBurned,
    duration,
    date
  ) {
    const li = document.createElement("li");
    const article = document.createElement("article");

    const pActivity = document.createElement("p");
    pActivity.textContent = `Activity: ${type}`;

    const pIntesity = document.createElement("p");
    pIntesity.textContent = `Intensity: ${intesity}`;

    const pDuration = document.createElement("p");
    pDuration.textContent = `Duration: ${duration} min.`;

    const pDate = document.createElement("p");
    pDate.textContent = `Date: ${date}`;

    const pCalories = document.createElement("p");
    pCalories.textContent = `Calories: ${caloriesBurned}`;

    article.appendChild(pActivity);
    article.appendChild(pIntesity);
    article.appendChild(pDuration);
    article.appendChild(pDate);
    article.appendChild(pCalories);

    const div = document.createElement("div");
    div.className = "btn-container";

    const buttonEdit = document.createElement("button");
    buttonEdit.textContent = "Edit";
    buttonEdit.className = "edit-btn";

    const buttonNext = document.createElement("button");
    buttonNext.textContent = "Next";
    buttonNext.className = "next-btn";

    div.appendChild(buttonEdit);
    div.appendChild(buttonNext);

    li.appendChild(article);
    li.appendChild(div);

    preview.appendChild(li);

    buttonEdit.addEventListener("click", () => {
      preview.removeChild(li);
      typeInput.value = type;
      intesityInput.value = intesity;
      caloriesBurnedInput.value = caloriesBurned;
      durationInput.value = duration;
      dateInput.value = date;

      buttonAdd.disabled = false;
    });

    buttonNext.addEventListener("click", () => {
      preview.removeChild(li);
      buttonAdd.disabled = false;

      const tr = document.createElement("tr");

      const tdType = document.createElement("td");
      tdType.className = "type-cell";
      tdType.textContent = type;

      const tdDuration = document.createElement("td");
      tdDuration.className = "duration-cell";
      tdDuration.textContent = duration;

      const tdCalories = document.createElement("td");
      tdCalories.className = "calories-cell";
      tdCalories.textContent = caloriesBurned;

      const tdDate = document.createElement("td");
      tdDate.className = "date-cell";
      tdDate.textContent = date;

      const tdIntesity = document.createElement("td");
      tdIntesity.className = "intensity-cell";
      tdIntesity.textContent = intesity;

      const tdButton = document.createElement("td");
      tdButton.className = "btn-cell";

      const buttonDelete = document.createElement("button");
      buttonDelete.textContent = "Delete";
      buttonDelete.className = "delete-btn";

      tdButton.appendChild(buttonDelete);

      tr.appendChild(tdType);
      tr.appendChild(tdDuration);
      tr.appendChild(tdCalories);
      tr.appendChild(tdDate);
      tr.appendChild(tdIntesity);
      tr.appendChild(tdButton);

      table.appendChild(tr);

      buttonDelete.addEventListener("click", (e) => {
        let currBut = e.target;
        let tdParent = currBut.parentElement;
        let tr = tdParent.parentElement;
        table.removeChild(tr);
      });
    });
  }
}
