function extractText() {
    const ul = document.getElementById("items");
    const output = document.getElementById("result");

    const liArray = Array.from(ul.children);
    for(let li of liArray){
        output.textContent += li.textContent + '\n';
    }
}