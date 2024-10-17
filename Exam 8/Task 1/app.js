function solution() {

    const giftName = document.querySelector('input');
    const button = document.querySelector('button');
    const [listUl,sentUl,discardUl] = document.querySelectorAll('section>ul');
    const giftList = [];
    

   

    function clear(){
        giftName.value = '';
    }

    function elemntsCreation(text){
        const li = document.createElement('li');
        li.className = 'gift';
        li.textContent = text;

        const buttonSend = document.createElement('button');
        buttonSend.textContent = 'Send';
        buttonSend.id = 'sendButton';

        const buttonDiscard = document.createElement('button');
        buttonDiscard.textContent = 'Discard';
        buttonDiscard.id = 'discardButton';

        li.appendChild(buttonSend);
        li.appendChild(buttonDiscard);
        
        giftList.push(li);

        giftList.sort((a,b)=> a.textContent[0].localeCompare(b.textContent[0]));


        giftList.forEach((li)=>{
            listUl.appendChild(li);
        })

        buttonSend.addEventListener('click',()=>{
            li.removeChild(buttonSend);
            li.removeChild(buttonDiscard);
            sentUl.appendChild(li);

        })

        buttonDiscard.addEventListener('click',()=>{
            li.removeChild(buttonSend);
            li.removeChild(buttonDiscard);
            discardUl.appendChild(li);
        })
    }

    button.addEventListener('click',(e)=>{
        e.preventDefault();
        let gift = giftName.value;
        elemntsCreation(gift);
        clear();
    })

    
}

