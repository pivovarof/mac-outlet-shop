const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
let popup = document.getElementsByClassName('popup')

console.log(popup);
let card;
popupLinks.forEach( elem => {
    elem.addEventListener('click', function open(){
        popup[0].classList.add('open')
    });
    
})

popup.forEach( elem => {
    elem.addEventListener('click', function clouse(){
        popup[0].classList.remove('open')
    });
    
})
    



