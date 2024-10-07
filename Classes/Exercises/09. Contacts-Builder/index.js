// {/* <article>
// <div class="title">{firstName lastName}<button>&#8505;</button></div>
// <div class="info">
//     <span>&phone; {phone}</span>
//     <span>&#9993; {email}</span>
// </div>
// </article> */}

class Contact {
  constructor(firstName, lastName, phone, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.email = email;
    this._online = false;
  }

  render(id) {
    //Create Element
    console.log(id)
    const itemOfTheId = document.querySelector("#" + id);
    const article = document.createElement("article");
    const titleDiv = document.createElement("div");
    titleDiv.className = "title";

    const button = document.createElement("button");
    button.innerHTML = "&#8505";
    titleDiv.textContent = `${this.firstName} ${this.lastName}`;

    //Create Elements and Append it

    titleDiv.appendChild(button);
    const infoDiv = document.createElement("div");
    infoDiv.setAttribute("class", "info");
    const spanPhone = document.createElement("span");
    spanPhone.textContent = `${this.phone}`;
    const spanEmail = document.createElement("span");
    spanEmail.textContent = `${this.email}`;
    infoDiv.appendChild(spanPhone);
    infoDiv.appendChild(spanEmail);

    //Show it in the main div and not display it;
    infoDiv.style.display = "none";

    button.addEventListener("click", (e) => {
      if (infoDiv.style.display === "none") {
        infoDiv.style.display = "block";
      } else {
        infoDiv.style.display = "none";
      }
    });

    article.appendChild(titleDiv);
    article.appendChild(infoDiv);
    itemOfTheId.appendChild(article);

    article.setAttribute("id", `${this.firstName}`);
  }

  get online() {
    return this._online;
  }

  set online(state) {
    this._online = state;
    const currArticle = document.querySelector("#" + `${this.firstName}`);
    const titleDiv = currArticle.querySelector("div.title");

    if (state) {
      titleDiv.classList.add("online");
    } else {
      titleDiv.classList.remove("online");
    }
  }
}

let contacts = [
  new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),
  new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),
  new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com"),
];
contacts.forEach((c) => c.render('holder'));

// After 1 second, change the online status to true
setTimeout(() => (contacts[2].online = true), 2000);
setTimeout(() => (contacts[0].online = true), 3000);
