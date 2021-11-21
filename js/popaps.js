const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const popup = document.getElementsByClassName('popup');
const namePopup = document.getElementsByClassName('name_popup');
const nameCards = document.getElementsByClassName('name_card');
const pricePopup = document.getElementsByClassName('price_popup');
const imgPopup = document.getElementsByClassName('img_popup');
const stockPopup = document.getElementsByClassName('stock_popup');
const reviePopup = document.getElementsByClassName('revie_popup');
const colorPopup = document.getElementsByClassName('color_popup');
const osPopup = document.getElementsByClassName('os_popup');
const chipPopup = document.getElementsByClassName('chip_popup');
const heightPopup = document.getElementsByClassName('height_popup');
const widthPopup = document.getElementsByClassName('width_popup');
const depthPopup = document.getElementsByClassName('depth_popup');
const weightPopup = document.getElementsByClassName('weight_popup');




popupLinks.forEach( elem => {
    elem.addEventListener('click', function open(){
         popup[0].classList.add('open')       
         namePopup[0].innerHTML = items[elem.id].name;
         pricePopup[0].innerHTML = `${items[elem.id].price}$`;         
         imgPopup[0].outerHTML = `<img class="card-img-top img_popup"  src="img/${items[elem.id].imgUrl}" alt="Apple">`;
         stockPopup[0].innerHTML = items[elem.id].orderInfo.inStock;
         reviePopup[0].innerHTML = `${items[elem.id].orderInfo.reviews}% `;
         colorPopup[0].innerHTML = items[elem.id].color;
         osPopup[0].innerHTML = items[elem.id].os;
         chipPopup[0].innerHTML = items[elem.id].chip.name;
         heightPopup[0].innerHTML = `${items[elem.id].size.height} cm`;
         widthPopup[0].innerHTML = `${items[elem.id].size.width} cm`;
         depthPopup[0].innerHTML = `${items[elem.id].size.depth} cm`;
         weightPopup[0].innerHTML = `${items[elem.id].size.weight} kg`;
    });
    
})

popup.forEach( elem => {
    elem.addEventListener('click', function close(){
        popup[0].classList.remove('open')
    });
    
})
    



