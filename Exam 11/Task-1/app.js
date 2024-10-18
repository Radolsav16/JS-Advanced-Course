window.addEventListener("load", solve);

function solve() {
  const firstNameInput = document.querySelector("#first-name");
  const lastNameInput = document.querySelector("#last-name");
  const peopleInput = document.querySelector("#people-count");
  const fromDateInput = document.querySelector("#from-date");
  const daysInput = document.querySelector("#days-count");

  const buttonNext = document.querySelector("#next-btn");

  const infoList = document.querySelector(".ticket-info-list");
  const confirmTicket = document.querySelector(".confirm-ticket");

  function clear() {
    firstNameInput.value = "";
    lastNameInput.value = "";
    peopleInput.value = "";
    fromDateInput.value = "";
    daysInput.value = "";
  }

  buttonNext.addEventListener("click", (e) => {
    e.preventDefault();
    let fisrtName = firstNameInput.value;
    let lastName = lastNameInput.value;
    let people = peopleInput.value;
    let fromDate = fromDateInput.value;
    let days = daysInput.value;

    if (!fisrtName || !lastName || !people || !fromDate || !days) return;

    createPreviewFunctionality(fisrtName, lastName, people, fromDate, days);
    clear();
    buttonNext.disabled = true;
  });

  function createPreviewFunctionality(
    firstName,
    lastName,
    people,
    fromDate,
    days
  ) {
    const li = document.createElement("li");
    li.className = "ticket";

    const article = document.createElement("article");

    const h3 = document.createElement("h3");
    h3.textContent = `Name: ${firstName} ${lastName}`;

    const pFromDate = document.createElement("p");
    pFromDate.textContent = `From date: ${fromDate}`;

    const pDays = document.createElement("p");
    pDays.textContent = `For ${days} days`;

    const pPeople = document.createElement("p");
    pPeople.textContent = `For ${people} people`;

    const buttonEdit = document.createElement("button");
    buttonEdit.textContent = "Edit";
    buttonEdit.className = "edit-btn";

    const buttonContinue = document.createElement("button");
    buttonContinue.textContent = "Continue";
    buttonContinue.className = "continue-btn";

    article.appendChild(h3);
    article.appendChild(pFromDate);
    article.appendChild(pDays);
    article.appendChild(pPeople);

    li.appendChild(article);
    li.appendChild(buttonEdit);
    li.appendChild(buttonContinue);

    infoList.appendChild(li);

    buttonEdit.addEventListener("click", () => {
      infoList.removeChild(li);
      buttonNext.disabled = false;
      firstNameInput.value = firstName;
      lastNameInput.value = lastName;
      peopleInput.value = people;
      fromDateInput.value = fromDate;
      daysInput.value = days;
    });

    buttonContinue.addEventListener("click", () => {
      li.removeChild(buttonEdit);
      li.removeChild(buttonContinue);
      infoList.removeChild(li);

      const buttonConfirm = document.createElement("button");
      buttonConfirm.textContent = "Confirm";
      buttonConfirm.className = "confirm-btn";

      const buttonCancel = document.createElement("button");
      buttonCancel.textContent = "Cancel";
      buttonCancel.className = "cancel-btn";

      li.appendChild(buttonConfirm);
      li.appendChild(buttonCancel);

      confirmTicket.appendChild(li);

      buttonCancel.addEventListener('click',()=>{
        confirmTicket.removeChild(li);
        buttonNext.disabled = false;
      })

      buttonConfirm.addEventListener('click',()=>{
        const div = document.querySelector('#main');
        document.body.removeChild(div);

        const h1 = document.createElement('h1');
        h1.textContent = 'Thank you, have a nice day!';
        h1.id = 'thank-you';

        const button = document.createElement('button');
        button.textContent = 'Back';
        button.id = 'back-btn';

        document.body.appendChild(h1);
        document.body.appendChild(button);

        button.addEventListener('click',()=>{
            location.reload();
        })
      })

    });
  }
}
