const cards = document.getElementById('cards');
const icon = document.getElementsByClassName('icon_card');
let red = document.querySelector('.order[value="red"]');
let black = document.querySelector('.order[value="black"]')
let blue = document.querySelector('.order[value="blue"]')
let gold = document.querySelector('.order[value="gold"]')
let green = document.querySelector('.order[value="green"]')
let white = document.querySelector('.order[value="white"]')
let grey = document.querySelector('.order[value="grey"]')
let yellow = document.querySelector('.order[value="yellow"]')



let filter =[];
addCards()

function addCards() {
  
      
      for (let i of items){
    let img = i.imgUrl;
    let name = i.name;
    let inStock = i.orderInfo.inStock;
    let price = i.price;
    let id = i.id;   
   
    
      cards.insertAdjacentHTML("afterbegin",
      `  <div class="col-lg-6 col-md-6 mb-4 cards-lok popup-link" id="${id}">
      <div class="card d-flex align-items-center justify-content-center">
        <div class="view owerlay " style="width: 18rem; height: 18rem;">
          <img class="card-img-top " src="img/${img}" alt="Apple">      
        </div>
        <div class="card-body text-center">                      
          <h3>
            <strong class="name_card">${name}</strong>       
            
          </h3>
          <p class="grey-text fw-bold"><i class="icon_card far fa-check-circle text-success"></i>
            <span class="fw-bold "> ${inStock}</span> left in stock</p>
                               
          <button type="button" class="btn btn-primary">Add to cart</button>
          <h4 class="font-weight-bold mt-3">
            <strong class="string-price">${price}$</strong>
          </h4>
        </div>
      </div>
    </div>` )

    if( inStock == 0){
  
      icon[0].className = 'icon_card far far fa-times-circle text-danger'
    }
    else{
     icon[0].className = 'icon_card far fa-check-circle text-success'
    }
    
    

  
}
}
const inputOrder = document.querySelectorAll('.order');
inputOrder.forEach(element => {
  element.onclick = filterFunction;
})
   
const cardsLok = document.querySelectorAll('.cards-lok')
const classFilt = document.querySelectorAll('.filt')



function filterFunction(){
   const cardClose = document.getElementsByClassName('card-close')

   cardClose.forEach(el => {
     el.classList.remove('card-close')
   })
  
  
  let arrDelete = [];    

  inputOrder.forEach(i => {
    if(i.checked == true){
      arrDelete.push(i.value);
      
    }
    
  })
  
  items.forEach(el =>{
    arrDelete.forEach(it => {
     let trueColor = (it[0].toUpperCase() + it.slice(1)).replace(/_/g," ");
     
     if(el.color.includes(trueColor) == false){
      document.getElementById(el.id).classList.add('card-close');

      
    }
     
    })
    
  })
}
  
  

 