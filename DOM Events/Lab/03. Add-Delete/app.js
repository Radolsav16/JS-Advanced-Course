function addItem() {
    const listOfItems = document.querySelector('#items');
    const input = document.querySelector('#newItemText');
    const text = input.value;

    if(!text) return;

    const newLi = document.createElement('li');
    const a = document.createElement('a');
    a.setAttribute('href','#');
    a.textContent = '[Delete]';
    newLi.textContent = text;
    newLi.appendChild(a);
    listOfItems.appendChild(newLi);

    a.addEventListener('click',(e)=>{
        const currEl = e.target;
        const parentEl = currEl.parentElement;
        parentEl.remove(currEl);
        
    });

    input.value = '';
}