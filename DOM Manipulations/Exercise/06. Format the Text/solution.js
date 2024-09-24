function solve() {
    const textArea = document.querySelector('#input');
    const output = document.getElementById('output');
    const text = textArea.value;
    const arr = text.split('. ');
    const sentencesPerP = 3;
    let outputHtml = '';

    if(!text) return;

    if(arr.length <= 3){
      outputHtml = `<p>${arr.join(". ")}</p>`;
      output.innerHTML = outputHtml;
      return;
    }

    const numberOfP = Math.ceil(arr.length / sentencesPerP);


    for(let i = 0; i < numberOfP ;i++){
        const p = i * numberOfP;
        const el = arr.slice(p , p + numberOfP).join(". ");
        outputHtml += `<p>${el}</p>`;
    }

    output.innerHTML = outputHtml;

    
}