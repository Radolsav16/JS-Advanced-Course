function addItem() {
    const listOfItems = document.querySelector('#items');
    const input = document.querySelector('#newItemText');
    const text = input.value;

    if(!text) return;

    const newLi = document.createElement('li');
    newLi.textContent = text;
    listOfItems.appendChild(newLi);

    input.value = '';
}