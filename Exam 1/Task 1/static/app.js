window.addEventListener("load", solve);

function solve() {
  const nameEl = document.querySelector("#name");
  const emailEl = document.querySelector("#email");
  const contactNumberEl = document.querySelector("#contact-number");
  const classTypeEl = document.querySelector("#class-type");
  const classTimeEl = document.querySelector("#class-time");
  const buttonSubmit = document.querySelector("#next-btn");
  const preview = document.querySelector(".class-info");

  function resetInputsField() {
    nameEl.value = "";
    emailEl.value = "";
    contactNumberEl.value = "";
    classTypeEl.value = "";
    classTimeEl.value = "";
    buttonSubmit.disabled = true;
  }

  buttonSubmit.addEventListener("click", createPreview);
debugger
  function createPreview(e) {
    e.preventDefault();
    
    let name = nameEl.value;
    let email = emailEl.value;
    let contactNumber = contactNumberEl.value;
    let classType = classTypeEl.value;
    let classTime = classTimeEl.value;

    if (!name || !email || !contactNumber || !classType || !classTime) return;

    createElemntsAndAppendIt(name, email, contactNumber, classType, classTime);
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

    buttonEdit.addEventListener("click", editInputs);
    countinueButt.addEventListener("click", countinueFunc);

    function editInputs(e) {
      preview.remove(li);
      buttonSubmit.disabled = false;  
      let [name, email, contactNumber, classType, classTime] = inputs;
      nameEl.value = name;
      emailEl.value = email;
      contactNumberEl.value =contactNumber ;
      classTypeEl.value = classType;
      classTimeEl.value = classTime;
    }

    function countinueFunc(e) {}
  }
}
