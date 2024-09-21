function solve() {
  const textInput = document.getElementById("text");
  const conventionInput = document.getElementById("naming-convention");
  const span = document.getElementById("result");
  let outputStr = "";
  let str = textInput.value.split(" ");
  const convention = conventionInput.value;
  debugger
  for(let i = 0 ; i < str.length;i++){
    const el = str[i];
    const firstLetter = el[0];
    const otherPart = el.slice(1);
    if(convention === 'Pascal Case'){
      outputStr += firstLetter.toUpperCase() + otherPart.toLowerCase();
    }else if(convention === 'Camel Case'){
      outputStr += i === 0 ? firstLetter.toLowerCase() + otherPart.toLowerCase() :
      firstLetter.toUpperCase() + otherPart.toLowerCase(); 
    }else{
      outputStr = 'Error!'
    }

   
  }

  span.textContent = outputStr;
  
}
