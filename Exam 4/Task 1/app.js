window.addEventListener("load", solve);

function solve() {
  const fisrtNameInput = document.querySelector("#first-name");
  const lastNameInput = document.querySelector("#last-name");
  const fromDateInput = document.querySelector("#from-date");
  const toDateInput = document.querySelector("#to-date");

  const buttonNext = document.querySelector("#next-btn");

  const infoList = document.querySelector(".info-list");
  const confirmList = document.querySelector(".confirm-list");

  function clear() {
    fisrtNameInput.value = "";
    lastNameInput.value = "";
    fromDateInput.value = "";
    toDateInput.value = "";
  }

  buttonNext.addEventListener("click", createInfo);

  function createInfo(e) {
    e.preventDefault();
    let fisrtName = fisrtNameInput.value;
    let lastName = lastNameInput.value;
    let forDate = fromDateInput.value;
    let toDate = toDateInput.value;

    let fisrtDate = new Date(`${forDate}`);
    let secondDate = new Date(`${toDate}`);

    if (!fisrtName || !lastName || !forDate || !toDate) return;
    if(fisrtDate > secondDate) return;

    createElements(fisrtName, lastName, forDate, toDate);

    clear();
    buttonNext.disabled = true;
  }

  function createElements(fisrtName, lastName, forDate, toDate) {
    const li = document.createElement("li");
    li.className = "vacation-content";

    const article = document.createElement("article");

    const h3 = document.createElement("h3");
    h3.textContent = `Name: ${fisrtName} ${lastName}`;

    const pfromDate = document.createElement("p");
    pfromDate.textContent = `From date: ${forDate}`;

    const ptoDate = document.createElement("p");
    ptoDate.textContent = `To date: ${toDate}`;

    article.appendChild(h3);
    article.appendChild(pfromDate);
    article.appendChild(ptoDate);

    li.appendChild(article);

    const buttonEdit = document.createElement("button");
    buttonEdit.textContent = "Edit";
    buttonEdit.className = "edit-btn";

    const buttonCountinue = document.createElement("button");
    buttonCountinue.textContent = "Continue";
    buttonCountinue.className = "continue-btn";

    li.appendChild(buttonEdit);
    li.appendChild(buttonCountinue);

    infoList.appendChild(li);

    buttonEdit.addEventListener("click", (e) => {
      li.removeChild(buttonEdit);
      li.removeChild(buttonCountinue);
      infoList.removeChild(li);

      fisrtNameInput.value = fisrtName;
      lastNameInput.value = lastName;
      fromDateInput.value = forDate;
      toDateInput.value = toDate;

      buttonNext.disabled = false;
    });

    buttonCountinue.addEventListener("click", (e) => {
      li.removeChild(buttonEdit);
      li.removeChild(buttonCountinue);
      infoList.removeChild(li);

      const confirmButton = document.createElement("button");
      confirmButton.textContent = "Confirm";
      confirmButton.className = "confirm-btn";

      const cancelButton = document.createElement("button");
      cancelButton.textContent = "Cancel";
      cancelButton.className = "cancel-btn";

      li.appendChild(confirmButton);
      li.appendChild(cancelButton);
      console.log(confirmList);
      confirmList.appendChild(li);

      const h1 = document.querySelector("#status");

      confirmButton.addEventListener("click", (e) => {
        confirmList.removeChild(li);
        buttonNext.disabled = false;
        h1.textContent = "Vacation Requested";
        h1.className = "vacation-confirmed";
      });

      cancelButton.addEventListener("click", (e) => {
        confirmList.removeChild(li);
        buttonNext.disabled = false;
        h1.textContent = "Cancelled Vacation";
        h1.className = "vacation-cancelled";
      });

      h1.addEventListener("click", () => {
        location.reload();
      });
    });
  }
}
