window.addEventListener("load", solve);

function solve() {
  const snowNameInput = document.querySelector("#snowman-name");
  const heigthInput = document.querySelector("#snowman-height");
  const locationInput = document.querySelector("#location");
  const creatorInput = document.querySelector("#creator-name");
  const specialAtributeInput = document.querySelector("#special-attribute");

  const buttonAdd = document.querySelector(".add-btn");

  const preview = document.querySelector(".snowman-preview");
  const snowList = document.querySelector(".snow-list");

  function reloadMethod(){
    location.reload();
  }

  buttonAdd.addEventListener("click", (e) => {
    e.preventDefault();
    let snowName = snowNameInput.value;
    let height = heigthInput.value;
    let location = locationInput.value;
    let creator = creatorInput.value;
    let specialAtribute = specialAtributeInput.value;

    if (!snowName || !height || !location || !creator || !specialAtribute)
      return;

    createPreview(snowName, height, location, creator, specialAtribute);
    clear();
    buttonAdd.disabled = true;


  });

  function clear() {
    snowNameInput.value = "";
    heigthInput.value = "";
    locationInput.value = "";
    creatorInput.value = "";
    specialAtributeInput.value = "";
  }

  function createPreview(snowName, height, location, creator, specialAtribute) {
    const li = document.createElement("li");
    li.className = "snowman-info";

    const article = document.createElement("article");

    const pName = document.createElement("p");
    pName.textContent = `Name: ${snowName}`;

    const pHeight = document.createElement("p");
    pHeight.textContent = `Height: ${height}`;

    const plocation = document.createElement("p");
    plocation.textContent = `Location: ${location}`;

    const pcreator = document.createElement("p");
    pcreator.textContent = `Creator: ${creator}`;

    const pSpecialAtt = document.createElement("p");
    pSpecialAtt.textContent = `Attribute: ${specialAtribute}`;

    article.appendChild(pName);
    article.appendChild(pHeight);
    article.appendChild(plocation);
    article.appendChild(pcreator);
    article.appendChild(pSpecialAtt);

    const div = document.createElement("div");
    div.className = "btn-container";

    const buttonEdit = document.createElement("button");
    buttonEdit.className = "edit-btn";
    buttonEdit.textContent = "Edit";

    const buttonNext = document.createElement("button");
    buttonNext.className = "next-btn";
    buttonNext.textContent = "Next";

    div.appendChild(buttonEdit);
    div.appendChild(buttonNext);

    li.appendChild(article);
    li.appendChild(div);

    preview.appendChild(li);

    buttonEdit.addEventListener("click", () => {
      preview.removeChild(li);
      snowNameInput.value = snowName;
      heigthInput.value = height;
      locationInput.value = location;
      creatorInput.value = creator;
      specialAtributeInput.value = specialAtribute;
      buttonAdd.disabled = false;
    });

    buttonNext.addEventListener("click", () => {

      li.removeChild(div);
      preview.removeChild(li)

      const sendButton = document.createElement('button');
      sendButton.textContent = 'Send';
      sendButton.className = 'send-btn';

      article.appendChild(sendButton);
      snowList.appendChild(li);

      sendButton.addEventListener('click',()=>{
        const main = document.querySelector('main');
        document.body.removeChild(main);


        const button = document.createElement('button');
        button.textContent = 'Back';
        button.className = 'back-btn';


        document.body.appendChild(button)
        const img = document.querySelector('#back-img');
        img.removeAttribute('hidden');

        button.addEventListener('click',()=>{
            reloadMethod()
        })
      })
    });
  }
}


