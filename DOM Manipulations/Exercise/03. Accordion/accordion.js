function toggle() {
    const span = document.querySelector('.button');
    const extraText = document.getElementById('extra');

    if(span.textContent === 'More'){
        span.textContent = 'Less';
        extraText.style.display = 'block';
    }else if(span.textContent === 'Less'){
        span.textContent = 'More';
        extraText.style.display = 'none';
    }

    

}