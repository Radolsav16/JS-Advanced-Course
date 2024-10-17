window.addEventListener("load", solve);

function solve() {
  const gemNameInput = document.querySelector("#gem-name");
  const colorInput = document.querySelector("#color");
  const caratsInput = document.querySelector("#carats");
  const priceInput = document.querySelector("#price");
  const typeInput = document.querySelector("#type");

  const buttonAdd = document.querySelector("#add-btn");
 
  const preview = document.querySelector('#preview-list'); 
  const collection = document.querySelector('#collection'); 

  function reset() {
    gemNameInput.value = "";
    colorInput.value = "";
    caratsInput.value = "";
    priceInput.value = "";
    typeInput.value = "";
  }

  buttonAdd.addEventListener("click", (e) => {
    e.preventDefault();

    let gem = gemNameInput.value;
    let color = colorInput.value;
    let carats = caratsInput.value;
    let price = priceInput.value;
    let type = typeInput.value;

    if(!gem || !color || !carats || !price || !type) return;
    createInnerFunctionality(gem,color,carats,price,type);
    reset();
    buttonAdd.disabled = true;
  });

  function createInnerFunctionality(gem, color, carats, price, type) {
    const li = document.createElement('li');
    li.className = 'gem-info';

    const article = document.createElement('article');
    
    const h4 = document.createElement('h4');
    h4.textContent = gem;

    const pColor = document.createElement('p');
    pColor.textContent = `Color: ${color}`;

    const pCarats = document.createElement('p');
    pCarats.textContent = `Carats: ${carats}`;

    const pPrice = document.createElement('p');
    pPrice.textContent = `Color: ${price}`;

    const pType = document.createElement('p');
    pType.textContent = `Color: ${type}`;


    article.appendChild(h4);
    article.appendChild(pColor);
    article.appendChild(pCarats);
    article.appendChild(pPrice);
    article.appendChild(pType);

    const buttonEdit = document.createElement('button');
    buttonEdit.textContent = 'Edit Information';
    buttonEdit.className = 'edit-btn';

    const buttonCancel = document.createElement('button');
    buttonCancel.textContent = 'Cancel';
    buttonCancel.className = 'cancel-btn';

    const buttonSave = document.createElement('button');
    buttonSave.textContent = 'Save to Collection';
    buttonSave.className = 'save-btn';


    li.appendChild(article);
    li.appendChild(buttonSave);
    li.appendChild(buttonEdit);
    li.appendChild(buttonCancel);

    preview.appendChild(li);



    buttonSave.addEventListener('click',()=>{       
        buttonAdd.disabled = false;
        preview.removeChild(li);
        li.removeChild(article);
        li.removeChild(buttonSave);
        li.removeChild(buttonEdit);
        li.removeChild(buttonCancel);

        li.className = '';

        const p = document.createElement('p');
        p.className = 'collection-item';
        p.textContent = `${gem} - Color: ${color}/ Carats: ${carats}/ Price: ${price}/ Type: ${type}`;

        li.appendChild(p);

        collection.appendChild(li);

    })

    buttonEdit.addEventListener('click',()=>{
    preview.removeChild(li);
    gemNameInput.value = gem;
    colorInput.value = color;
    caratsInput.value = carats;
    priceInput.value = price;
    typeInput.value = type;

    buttonAdd.disabled = false;

    
    })

    buttonCancel.addEventListener('click',()=>{
        preview.removeChild(li);
        buttonAdd.disabled = false;
    })



  }
}
