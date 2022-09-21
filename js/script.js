
const sideLeft = document.querySelector('.col-left-side');
const elemForm = document.querySelector('.elem-form');


const btn = document.querySelector('.btn__btn-submit');
const btnReset = document.querySelector('.btn__reset');

let submitResult = document.querySelector('.form-submit');

nameFilled = false;
numberFilled = false;
monthFilled = false;
yearFilled = false;
cvcFilled = false

btnPressed = {
    correct: 'Your data was correct, payment accepted!',
    error: 'There was an issue with processing your data.'
}


btn.addEventListener('click', () => {
    let cardName = document.querySelector('#card_name').value;
    let cardNumber = document.querySelector('#card_number').value;
    let cardMonth = document.querySelector('#card_date_month').value;
    let cardYear = document.querySelector('#card_date_year').value;
    let cardCvc = document.querySelector('#card_cvc').value;
    


    elemForm.style.display = 'none';

    submitResult.style.display = 'flex';
    submitResult.style.flexDirection = 'column';
    submitResult.style.justifyContent = 'space-evenly';
    
    if(cardName.length === 0){
        submitResult.innerHTML = `${btnPressed.error}. Check the "name" field for any mistakes and try again.` 

        submitResult.appendChild(btnReset);

    } else if(cardNumber.length < 12 || cardNumber.length > 14){
        submitResult.innerHTML = `${btnPressed.error}. Your card number doesn't seem to be correct, please check it for any errors, and try again.`

        submitResult.appendChild(btnReset);


    } else if(cardMonth.length < 2 && cardYear.length < 4 && cardCvc.length < 3){
        submitResult.innerHTML = `${btnPressed.error}. The date or CVC number you input do not seem to be correct. Please check them for any errors, and try again.`

    } else {

        
        submitResult.innerHTML = btnPressed.correct;
        submitResult.appendChild(btnReset);
    }

    
})

btnReset.addEventListener('click', () => {
    
    elemForm.style.display = 'flex';

    submitResult.style.display = 'none';
})