function extract(content) {
    const text = document.getElementById(content);
    const str = text.textContent;
    const regex = /\(([^)]+)\)/g;
    const result = [];

    const mathesArr = Array.from(str.matchAll(regex));
    for(let arr of mathesArr){
        result.push(arr[1]);
    }
    return result.join(";");
}

