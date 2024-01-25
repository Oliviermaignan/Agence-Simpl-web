function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}






// let button1Header = document.querySelector('.bouton_1_header')
// button1Header.addEventListener('click', ()=>{

//     let modalWindow1 = document.createElement('div');
//     modalWindow1.id = 'myModalWindow1';
//     modalWindow1.className = 'myModalWindow1';
//     modalWindow1.style.position = 'fixed';
//     modalWindow1.style.right = '20%';
//     modalWindow1.style.left = '20%'
//     modalWindow1.style.top = '20%'
//     modalWindow1.style.bottom = '20%'
//     modalWindow1.style.zIndex = '2';
//     modalWindow1.style.backgroundColor = 'hsl(192, 100%, 9%)';
//     modalWindow1.style.boxShadow = "0px -2px 10px 1px rgb(147 147 147 / 15%)"
//     modalWindow1.style.borderRadius = "10px"

//     let modalWindowContent1 = document.createElement('div');
//     modalWindowContent1.id = 'modalWindowContent';
//     modalWindowContent1.className = 'modalWindowContent';

//     let text = document.createElement('p');
//     text.id = 'modalWindowText';
//     text.className = 'modalWindowText';
//     text.innerText = 'ma nouvelle fenetre';

//     let closeBtn = document.createElement('span');
//     closeBtn.id = 'closeModalBtn';
//     closeBtn.className = 'closeBtn';
//     closeBtn.innerHTML = '&times;';



//     let popUpWindow = document.querySelector('.popUpWindow')
//     // popUpWindow.style.backdropFilter = 'blur(4px)'



//     popUpWindow.appendChild(modalWindow)
//     modalWindow.appendChild(modalWindowContent);
//     modalWindowContent.appendChild(closeBtn);
//     modalWindowContent.appendChild(text);
// });