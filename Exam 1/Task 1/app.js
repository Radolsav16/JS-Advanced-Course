window.addEventListener("load", solve);

function solve() {
  const nameEl = document.querySelector("#name");
  const emailEl = document.querySelector("#email");
  const contactNumberEl = document.querySelector("#contact-number");
  const classTypeEl = document.querySelector("#class-type");
  const classTimeEl = document.querySelector("#class-time");
  const buttonSubmit = document.querySelector("#next-btn");
  const preview = document.querySelector(".class-info");
  const confrimUl = document.querySelector(".confirm-class");

  function resetInputsField() {
    nameEl.value = "";
    emailEl.value = "";
    contactNumberEl.value = "";
    classTypeEl.value = "";
    classTimeEl.value = "";
  }

  buttonSubmit.addEventListener("click", createPreview);
  function createPreview(e) {
    e.preventDefault();

    let name = nameEl.value;
    let email = emailEl.value;
    let contactNumber = contactNumberEl.value;
    let classType = classTypeEl.value;
    let classTime = classTimeEl.value;

    if (!name || !email || !contactNumber || !classType || !classTime) return;

    createElemntsAndAppendIt(name, email, contactNumber, classType, classTime);

    buttonSubmit.disabled = true;
    resetInputsField();
  }

  function createElemntsAndAppendIt(...inputs) {
    const li = document.createElement("li");
    li.className = "info-item";
    const article = document.createElement("article");
    article.className = "personal-info";
    for (let i = 0; i < 5; i++) {
      const p = document.createElement("p");
      p.textContent = inputs[i];
      article.appendChild(p);
    }
    const buttonEdit = document.createElement("button");
    buttonEdit.textContent = "Edit";
    buttonEdit.className = "edit-btn";

    const countinueButt = document.createElement("button");
    countinueButt.textContent = "Continue";
    countinueButt.className = "continue-btn";

    li.appendChild(article);
    li.appendChild(buttonEdit);
    li.appendChild(countinueButt);

    preview.appendChild(li);

    buttonEdit.addEventListener("click", () => {
      preview.removeChild(li);
      nameEl.value = inputs[0];
      emailEl.value = inputs[1];
      contactNumberEl.value = inputs[2];
      classTypeEl.value = inputs[3];
      classTimeEl.value = inputs[4];
      buttonSubmit.disabled = false;
    });
    countinueButt.addEventListener("click", () => {
      preview.removeChild(li);
      li.removeChild(buttonEdit);
      li.removeChild(countinueButt);

      const buttonCancel = document.createElement("button");
      buttonCancel.textContent = "Cancel";
      buttonCancel.className = "cancel-btn";

      const confirmBtn = document.createElement("button");
      confirmBtn.textContent = "Confirm";
      confirmBtn.className = "confirm-btn";
      li.appendChild(buttonCancel);
      li.appendChild(confirmBtn);
      confrimUl.appendChild(li);

      buttonCancel.addEventListener("click", () => {
        confrimUl.removeChild(li);
        buttonSubmit.disabled = false;
      });

      confirmBtn.addEventListener("click", () => {
        const div = document.querySelector("#main");
        document.body.removeChild(div);
        const h1 = document.createElement("h1");
        h1.id = "thank-you";
        h1.textContent =
          "Thank you for scheduling your appointment, we look forward to seeing you!";
        const button = document.createElement("button");
        button.id = "done-btn";
        button.textContent = "Done";

        button.addEventListener("click", () => {
          location.reload();
        });

        document.body.appendChild(h1);
        document.body.appendChild(button);
      });
    });
  }
}
