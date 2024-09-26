function attachGradientEvents() {
    const gradient = document.querySelector('#gradient');
    const resultDiv = document.querySelector('#result')

    gradient.addEventListener('mousemove',(e)=>{
        const percentage = Math.floor(Number(e.offsetX) / Number(gradient.clientWidth) * 100 ) + '%';
        resultDiv.textContent = percentage;
        
          
    });
}