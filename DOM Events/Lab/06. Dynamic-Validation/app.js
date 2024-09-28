function validate() {
  const inputEl = document.querySelector("#email");
  const regex = /(?<word>[a-z]+)[@](?<domain>[a-z]+)[.](?<extencion>[a-z]+)/gi;
  let string = "";

  inputEl.addEventListener("input", (e) => {
    const char = e.data;
    string += char;
    
    if (!regex.test(string)) {
        console.log('wrong');
      inputEl.setAttribute("class", "error");
    } else {
      inputEl.removeAttribute('class');
      console.log('write');
      
    }
  });
}
