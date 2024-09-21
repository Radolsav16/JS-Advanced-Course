function editElement(ref,match,replacer) {
    let  str = ref.textContent;
    while(str.includes(match)){
        str = str.replace(match,replacer);
    }

    ref.textContent = str;

}