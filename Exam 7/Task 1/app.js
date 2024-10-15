window.addEventListener("load", solve);

function solve() {
  const timeInput = document.querySelector("#time");
  const dateInput = document.querySelector("#date");
  const placeInput = document.querySelector("#place");
  const eventNameInput = document.querySelector("#event-name");
  const contactInput = document.querySelector("#email");

  const checkList = document.querySelector("#check-list");
  const upcommingList = document.querySelector("#upcoming-list");
  const finishedList = document.querySelector("#finished-list");

  const buttonAdd = document.querySelector("#add-btn");

  function clear() {
    timeInput.value = "";
    dateInput.value = "";
    placeInput.value = "";
    eventNameInput.value = "";
    contactInput.value = "";
  }

  buttonAdd.addEventListener("click", (e) => {
    e.preventDefault();
    let time = timeInput.value;
    let date = dateInput.value;
    let place = placeInput.value;
    let eventName = eventNameInput.value;
    let contact = contactInput.value;

    if (!time || !date || !place || !eventName || !contact) return;

    createElements(time, date, place, eventName, contact);
    clear();
    buttonAdd.disabled = true;
  });

  function createElements(time, date, place, eventName, contact) {
    const li = document.createElement("li");
    li.className = "event-content";

    const article = document.createElement("article");

    const pBegins = document.createElement("p");
    pBegins.textContent = `Begins: ${date} at: ${time}`;

    const pPlace = document.createElement("p");
    pPlace.textContent = `In: ${place}`;

    const pEvent = document.createElement("p");
    pEvent.textContent = `Event: ${eventName}`;

    const pContact = document.createElement("p");
    pContact.textContent = `Contact: ${contact}`;

    article.appendChild(pBegins);
    article.appendChild(pPlace);
    article.appendChild(pEvent);
    article.appendChild(pContact);

    const buttonEdit = document.createElement("button");
    buttonEdit.textContent = "Edit";
    buttonEdit.className = "edit-btn";

    const buttonContinue = document.createElement("button");
    buttonContinue.textContent = "Continue";
    buttonContinue.className = "continue-btn";

    li.appendChild(article);
    li.appendChild(buttonEdit);
    li.appendChild(buttonContinue);

    checkList.appendChild(li);

    buttonEdit.addEventListener("click", (e) => {
      checkList.removeChild(li);

      timeInput.value = time;
      dateInput.value = date;
      placeInput.value = place;
      eventNameInput.value = eventName;
      contactInput.value = contact;

      buttonAdd.disabled = false;
    });

    buttonContinue.addEventListener("click", (e) => {
      li.removeChild(buttonEdit);
      li.removeChild(buttonContinue);
      checkList.removeChild(li);
      buttonAdd.disabled = false;

      const buttonMove = document.createElement("button");
      buttonMove.textContent = "Move to Finished";
      buttonMove.className = "finished-btn";

      li.appendChild(buttonMove);
      upcommingList.appendChild(li);

      buttonMove.addEventListener("click", () => {
        li.removeChild(buttonMove);
        upcommingList.removeChild(li);
        finishedList.appendChild(li);

        const clearButt = document.querySelector("#clear");

        clearButt.addEventListener("click", () => {
          finishedList.removeChild(li);
        });
      });
    });
  }
}
