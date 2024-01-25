let getStartedButton = document.querySelector('.get-started-button')

getStartedButton.addEventListener('click', ()=>{

    let popUpWindow = document.querySelector('.popUpWindow');
    let overlay = document.querySelector('.overlay');
    popUpWindow.classList.remove('hidden');
    overlay.classList.remove('hidden');

    creationPopUp()
    creationDuFormulaire()
});

function creationPopUp(){

    let modalWindowContent = document.createElement('div');
    modalWindowContent.id = 'modalWindowContent';
    modalWindowContent.className = 'modalWindowContent';

    let text = document.createElement('p');
    text.id = 'modalWindowTitle';
    text.className = 'modalWindowTitle';
    text.innerText = 'Get Started for free';

    let closeBtn = document.createElement('span');
    closeBtn.id = 'closeModalBtn';
    closeBtn.className = 'closeBtn';
    closeBtn.innerHTML = '&times;';

    //Au click la fenetre et le overlay sont hidden
    let overlay = document.querySelector('.overlay');
    closeBtn.addEventListener('click', ()=>{
        popUpWindow.classList.add('hidden');
        overlay.classList.add('hidden');
    })


    let popUpWindow = document.querySelector('.popUpWindow');
    popUpWindow.innerHTML = '';
    popUpWindow.appendChild(modalWindowContent);
    modalWindowContent.appendChild(closeBtn);
    modalWindowContent.appendChild(text);
}

function creationDuFormulaire(){

    let modalWindowContent = document.querySelector('.modalWindowContent');

    //creation de la div container
    let formContainer = document.createElement('div');
    formContainer.className = 'formContainer';

    //creation field qui contient input et label

    //firstName
    let firstField = document.createElement('div');
    firstField.className = "field";
    let firstNameInput = document.createElement('input');
    firstNameInput.setAttribute('name', 'firstName');
    firstNameInput.setAttribute('type', 'text');
    let labelNameInput = document.createElement('label');
    labelNameInput.setAttribute('for', 'firstName');
    labelNameInput.textContent = "first name"

    //lastName
    let secondField = document.createElement('div');
    secondField.className = "field";
    let lastNameInput = document.createElement('input');
    lastNameInput.setAttribute('name', 'lastName');
    lastNameInput.setAttribute('type', 'text');
    let labelLastNameInput = document.createElement('label');
    labelLastNameInput.setAttribute('for', 'lastName');
    labelLastNameInput.textContent = "last name"

    //email
    let emailField = document.createElement('div');
    emailField.className = "field";
    let emailInput = document.createElement('input');
    emailInput.setAttribute('name', 'email');
    emailInput.setAttribute('type', 'email');
    emailInput.setAttribute('required', '');
    let labelEmailInput = document.createElement('label');
    labelEmailInput.setAttribute('for', 'email');
    labelEmailInput.textContent = "e-m@il"

    //button
    let btnField = document.createElement('div');
    btnField.className = "btnfield";
    let subscribeBtn = document.createElement('input')
    subscribeBtn.classList.add('subscribeBtn')
    subscribeBtn.textContent = "Subcribe"
    subscribeBtn.type = "submit"

    //attribution parent enfant
    modalWindowContent.appendChild(formContainer)

    //fields dans form container
    formContainer.appendChild(firstField)
    formContainer.appendChild(secondField)
    formContainer.appendChild(emailField)
    formContainer.appendChild(btnField)

    // label et input firstField
    firstField.appendChild(labelNameInput)
    firstField.appendChild(firstNameInput)

    // label et input secondField
    secondField.appendChild(labelLastNameInput)
    secondField.appendChild(lastNameInput)

    //label et input email field
    emailField.appendChild(labelEmailInput)
    emailField.appendChild(emailInput)

    //button subscribe
    btnField.appendChild(subscribeBtn)

}


document.addEventListener(
    "click",
    (e)=>{
    if (
        e.target.matches(".closeBtn") ||
        e.target.matches(".overlay")
    ) {
        console.log('coucou')
        closeModal()
    }
    }
)
    
function closeModal() {
    document.querySelector(".popUpWindow").classList.add('hidden')
    document.querySelector(".overlay").classList.add('hidden')
}