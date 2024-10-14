window.addEventListener("load", solve);

function solve() {
  const formEl = document.querySelector(".ticket-form");
  let inputArr = Array.from(formEl.querySelectorAll("input, select"));
  const [
    numberTicketInput,
    seatingPreferenceInput,
    fullnameInput,
    emailInput,
    phoneNumberInput,
  ] = inputArr;

  const purchaseButt = document.querySelector("#purchase-btn");
  const previewList = document.querySelector("#ticket-preview");
  const purchaseList = document.querySelector("#ticket-purchase");

  const predicates = [
    "Count: ",
    "Preference: ",
    "To: ",
    "Email: ",
    "Phone Number: ",
  ];

  purchaseButt.addEventListener("click", (e) => {
    e.preventDefault();
    const filterValue = inputArr.filter((input) => input.value === "");
    if (filterValue.length > 0) return;

    let tickets = numberTicketInput.value;
    let seat = seatingPreferenceInput.value;
    let fullname = fullnameInput.value;
    let email = emailInput.value;
    let phoneNumber = phoneNumberInput.value;

    let elArr = [tickets, seat, fullname, email, phoneNumber];

    const li = document.createElement("li");
    li.className = "ticket-purchase";

    const article = document.createElement("article");

    elArr.forEach((el, i) => {
      let p = document.createElement("p");
      p.textContent = predicates[i] + el;
      article.appendChild(p);
    });

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

    previewList.appendChild(li);

    formEl.reset();
    purchaseButt.disabled = true;

    buttonEdit.addEventListener("click", (e) => {
      previewList.removeChild(li);
      inputArr.forEach((input, i) => {
        input.value = elArr[i];
      });
      purchaseButt.disabled = false;
    });

    buttonNext.addEventListener("click", (e) => {
      li.removeChild(div);
      const buttonBuy = document.createElement("button");
      buttonBuy.textContent = "Buy";
      buttonBuy.className = "buy-btn";

      article.appendChild(buttonBuy);
      purchaseList.appendChild(li);

      buttonBuy.addEventListener("click", (e) => {
        purchaseList.removeChild(li);
        const bottomContent = document.querySelector(".bottom-content");
        const h2 = document.createElement("h2");
        h2.textContent = "Thank you for your purchase!";

        const buttonBack = document.createElement("button");
        buttonBack.textContent = "Back";
        buttonBack.className = "back-btn";

        bottomContent.appendChild(h2);
        bottomContent.appendChild(buttonBack);

        buttonBack.addEventListener('click',()=>{
            location.reload();
            purchaseButt.disabled = false;
        })
      });
    });
  });
}
