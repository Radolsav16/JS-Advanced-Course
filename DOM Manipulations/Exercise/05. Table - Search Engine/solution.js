function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);

  function onClick() {
    const tableRows = document.querySelectorAll("table tbody tr");
    const inputEl = document.querySelector("#searchField");
    const searchStr = inputEl.value.toLowerCase();

    if(!searchStr) return;
    
    for (let el of Array.from(tableRows)) {
      el.classList.remove("select");
    }

    for (let el of Array.from(tableRows)
   
   ) {
      const row = el.innerText.toLowerCase();
      if (row.includes(searchStr)) {
          el.classList.add("select");
      }
    }

    inputEl.value = "";
  }
}
