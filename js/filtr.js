document.querySelector('.filtr-btn').onclick = clickFiltr;
const cardsFilter = document.getElementById('cards');
const allCards = document.getElementsByClassName('cards-lok')
const checkRed = document.querySelector('.check_red')



function clickFiltr(){
    addCards();
    let from = Number (document.querySelector('.input-from').value);
    let to = Number (document.querySelector('.input-to').value);
           
    let prices = document.getElementsByClassName('string-price');
    // let blockHide = document.querySelectorAll('.string-price')
    

    let price;

    let arrPrices = Array.from(prices)
    arrPrices.forEach(item => {
        // item.textContent = item.textContent.replace('$','');
        price = Number((item.textContent).replace('$',''));
        
        if ( !(price  >= from && price <= to)){  

            item.closest('.cards-lok').classList.add('hide');
            item.closest('.cards-lok').remove();
            // item.textContent = `${String(price)} $`;
            
           
        }
    })     
             

  
}

document.querySelectorAll('.order').forEach((elem) => {
    elem.onclick = orderFunction;
})

function orderFunction(){
    let red = document.querySelector('.order[value="red"]')
    let black = document.querySelector('.order[value="black"]')
    let blue = document.querySelector('.order[value="blue"]')
    let gold = document.querySelector('.order[value="gold"]')
    let green = document.querySelector('.order[value="green"]')
    let white = document.querySelector('.order[value="white"]')
    let grey = document.querySelector('.order[value="grey"]')
    let yellow = document.querySelector('.order[value="yellow"]')

    let filter =[];
    
    if (this.value == 'red' && red.checked){
        items.forEach(el => {
            el.color.forEach(e => {                
                if ( e == 'Red'){
                    filter.push(el.id);
                    filterFunction (filter)
                }
            })
        })
        console.log(filter);
    }
    else{
        addCards()
    }
}

function filterFunction (arr) {
    for (let i of items){
        let img = i.imgUrl;
        let name = i.name;
        let inStock = i.orderInfo.inStock;
        let price = i.price;
        let id = i.id;
    arr.forEach(el => {
        if ( el == id){

            cards.insertAdjacentHTML("afterbegin",
         `<div class="col-lg-6 col-md-6 mb-4 cards-lok popup-link" id="${id}">
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
        }

    }) 
        
     
     
     
      
      
  }
  }