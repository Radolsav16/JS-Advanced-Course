window.addEventListener('load', solve);

function solve() {
    const firstNameInput = document.querySelector('#first-name');
    const lastNameInput = document.querySelector('#last-name');
    const checkInInput = document.querySelector('#date-in');
    const checkOutInput = document.querySelector('#date-out');
    const peopleInput = document.querySelector('#people-count');
    
    const  buttonNext = document.querySelector('#next-btn');

    const infoList = document.querySelector('.info-list');
    const confirmList = document.querySelector('.confirm-list');
    const h1 = document.querySelector('#verification');

    function clear(){
        firstNameInput.value = '';
        lastNameInput.value = '';
        checkInInput.value = '';
        checkOutInput.value = '';
        peopleInput.value = '';
    }

    buttonNext.addEventListener('click',(e)=>{
        e.preventDefault();
        let firstName = firstNameInput.value;
        let lastName = lastNameInput.value;
        let checkIn = checkInInput.value;
        let checkOut = checkOutInput.value;
        let people = peopleInput.value;

        let startDate = new Date(checkIn);
        let overDate = new Date(checkOut);

        if(!firstName || !lastName || !checkIn || !checkOut || !people) return;

        if(startDate > overDate) return;

        createPreviewFunctionality(firstName,lastName,checkIn,checkOut,people);

        clear();
        buttonNext.disabled = true;


    })

    function createPreviewFunctionality(firstName,lastName,checkIn,checkOut,people){
        const li = document.createElement('li');
        li.className = 'reservation-content';

        const article = document.createElement('article');

        const h3 = document.createElement('h3');
        h3.textContent = `Name: ${firstName} ${lastName}`;

        const pFromDate = document.createElement('p');
        pFromDate.textContent = `From date: ${checkIn}`;

        const pToDate = document.createElement('p');
        pToDate.textContent = `To date: ${checkOut}`;

        const pPeople = document.createElement('p');
        pPeople.textContent = `For ${people} people`;


        article.appendChild(h3);
        article.appendChild(pFromDate);
        article.appendChild(pToDate);
        article.appendChild(pPeople);

        const buttonEdit = document.createElement('button');
        buttonEdit.textContent = 'Edit';
        buttonEdit.className = 'edit-btn';

        const buttonContinue = document.createElement('button');
        buttonContinue.textContent = "Continue";
        buttonContinue.className = 'continue-btn';

        li.appendChild(article);
        li.appendChild(buttonEdit);
        li.appendChild(buttonContinue);

        infoList.appendChild(li);

        buttonEdit.addEventListener('click',()=>{
            infoList.removeChild(li);
            firstNameInput.value = firstName;
            lastNameInput.value = lastName;
            checkInInput.value = checkIn;
            checkOutInput.value = checkOut;
            peopleInput.value = people;

            buttonNext.disabled = false;

        })

        buttonContinue.addEventListener('click',()=>{
            li.removeChild(buttonEdit);
            li.removeChild(buttonContinue);
            infoList.removeChild(li);

            const buttonConfirm = document.createElement('button');
            buttonConfirm.textContent = 'Confirm';
            buttonConfirm.className = 'confirm-btn';
    
            const buttonCancel = document.createElement('button');
            buttonCancel.textContent = "Cancel";
            buttonCancel.className = 'cancel-btn';

            li.appendChild(buttonConfirm);
            li.appendChild(buttonCancel);

            confirmList.appendChild(li);


            buttonConfirm.addEventListener('click',()=>{
                confirmList.removeChild(li);
                buttonNext.disabled = false;
                h1.className = 'reservation-confirmed';
                h1.textContent = 'Confirmed.';
            })

            buttonCancel.addEventListener('click',()=>{
                confirmList.removeChild(li);
                buttonNext.disabled = false;
                h1.className = 'reservation-cancelled';
                h1.textContent = 'Cancelled.';
            })

        })



    }
}



    
    
