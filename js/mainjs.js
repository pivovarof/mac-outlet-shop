const cards = document.getElementById('cards');
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
         <p class="grey-text fw-bold"><i class="far fa-check-circle text-success"></i>
           <span class="fw-bold "> ${inStock}</span> left in stock</p>
                              
         <button type="button" class="btn btn-primary">Add to cart</button>
         <h4 class="font-weight-bold mt-3">
           <strong class="string-price">${price}$</strong>
         </h4>
       </div>
     </div>
   </div>` )
    


    
}
}
addCards();