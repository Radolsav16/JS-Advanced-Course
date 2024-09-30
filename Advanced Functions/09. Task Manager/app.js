function solve() {
  const form = document.querySelector("form");
  const openSec = document.querySelector(
    ".wrapper section:nth-child(2) > div:nth-child(2)"
  );
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const taskInputEl = document.querySelector("#task");
    const descriptionEl = document.querySelector("#description");
    const dateEl = document.querySelector("#date");

    const task = taskInputEl.value;
    const description = descriptionEl.value;
    const date = dateEl.value;
    if (!task || !description || !date) return;

    createTask(task, description, date);
    form.reset();
  });

  function createTask(task, description, date) {
    const article = document.createElement("article");
    const h3 = document.createElement("h3");
    h3.textContent = task;
    const p1 = document.createElement("p");
    p1.textContent = `Description: ${description}`;
    const p2 = document.createElement("p");
    p2.textContent = `Due Date: ${date}`;

    const div = document.createElement("div");
    div.className = "flex";
    const buttonStart = document.createElement("button");
    buttonStart.textContent = "Start";
    buttonStart.className = "green";
    const buttonDelete = document.createElement("button");
    buttonDelete.textContent = "Delete";
    buttonDelete.className = "red";

    div.append(buttonStart, buttonDelete);
    article.append(h3, p1, p2, div);
    openSec.appendChild(article);

    buttonStart.addEventListener("click", (e) => {
      const openSec = e.target.closest("section");
      const progressSec = openSec.nextElementSibling;
      const div = document.querySelector("#in-progress");
      buttonStart.textContent = "Delete";
      buttonStart.className = "red";
      buttonDelete.textContent = "Finish";
      buttonDelete.className = "orange";
      div.append(article);

      buttonStart.addEventListener("click", (e) => {
        const currArticle = e.target.closest("article");
        currArticle.remove();
      });

      //Make Task for Complition
      buttonDelete.addEventListener("click", (e) => {
        const completeSec = progressSec.nextElementSibling;
        const currArticle = e.target.closest("article");
        const div = currArticle.querySelector('div');
        div.remove();
        completeSec.appendChild(currArticle);
      });
    });

    buttonDelete.addEventListener("click", () => deleteButton(article));
  }

  function deleteButton(el) {
    el.remove();
  }
}
