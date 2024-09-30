function solve() {
  const buttons = document.querySelectorAll("button");
  const textarea = document.querySelector("textarea");
  const buttonCheckout = document.querySelector(".checkout");
  const cart = [];
  let total = 0;
  let isClicked = false;
  buttonCheckout.addEventListener("click", checkout);
  function add(e) {
    const currProductDiv = e.target.closest(".product");
    const [divImg, divDetails, divButton, divPrice] = Array.from(
      currProductDiv.children
    );
    const price = Number(divPrice.textContent);
    const [nameEl, detailsEL] = divDetails.children;
    const name = nameEl.textContent;
    total += price;
    if(!cart.includes(name)){
        cart.push(name);
        textarea.value += `Added ${name} for ${price.toFixed(2)} to the cart.\n`;
    } 
   
  }

  buttons.forEach((button) => {
    button.addEventListener("click", add);
  });

  function checkout() {
    isClicked = true;
    textarea.value += `You bought ${cart.join(", ")} for ${total.toFixed(2)}.`;
    buttons.forEach((button) => {
      button.removeEventListener("click", add);
    });
    buttonCheckout.removeEventListener("click", checkout);
  }
}
