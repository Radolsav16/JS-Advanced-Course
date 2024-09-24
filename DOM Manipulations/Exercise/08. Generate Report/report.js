function generateReport() {
    const tHeadRowCells = document.querySelectorAll('table thead tr th');
    const tBodyRowCells = document.querySelectorAll('table tbody tr');
    const outputArea = document.querySelector('#output');
    
    const checkedInputsEl = Array.from(tHeadRowCells)
        .map((item,index) => {
            return {
                el:item.children[0],
                name:item.children[0].getAttribute('name'),
                index
            }
        })
        .filter((item) => item.el.checked);

    const outputData = Array.from(tBodyRowCells)
        .map((tr) => {
            return checkedInputsEl.reduce((acc,val)=>{
                acc[val.name] = tr.children[val.index].textContent;
                return acc;
            },{});
        })


    outputArea.value = JSON.stringify(outputData);    
}