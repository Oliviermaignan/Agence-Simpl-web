let getStartedButton = document.querySelector('.get-started-button')
getStartedButton.addEventListener('click', ()=>{

    let modalWindow = document.createElement('div');
    modalWindow.id = 'myModalWindow';
    modalWindow.className = 'myModalWindow';
    modalWindow.style.position = 'fixed';
    modalWindow.style.right = '20%';
    modalWindow.style.left = '20%'
    modalWindow.style.top = '20%'
    modalWindow.style.bottom = '20%'
    modalWindow.style.zIndex = '2';
    modalWindow.style.backgroundColor = 'white';
    modalWindow.style.boxShadow = "0px -2px 10px 1px rgb(147 147 147 / 15%)"
    modalWindow.style.borderRadius = "10px"

    let modalWindowContent = document.createElement('div');
    modalWindowContent.id = 'modalWindowContent';
    modalWindowContent.className = 'modalWindowContent';

    let text = document.createElement('p');
    text.id = 'modalWindowText';
    text.className = 'modalWindowText';
    text.innerText = 'ma nouvelle fenetre';

    let closeBtn = document.createElement('span');
    closeBtn.id = 'closeModalBtn';
    closeBtn.className = 'closeBtn';
    closeBtn.innerHTML = '&times;';

    let popUpWindow = document.querySelector('.popUpWindow')
    popUpWindow.style.backdropFilter = 'blur(4px)'

    popUpWindow.appendChild(modalWindow)
    modalWindow.appendChild(modalWindowContent);
    modalWindowContent.appendChild(closeBtn);
    modalWindowContent.appendChild(text);
});







