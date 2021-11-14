const cards = document.getElementById('cards');
function addCards() {
  for (let i of items){
    let img = i.imgUrl;
    let name = i.name;
    let inStock = i.orderInfo.inStock;
    let price = i.price;

    cards.insertAdjacentHTML("afterbegin",
     `  <div class="col-lg-6 col-md-6 mb-4 cards-lok">
    <div class="card">
      <div class="view owerlay" >
        <img class="card-img-top" " src="img/${img}" alt="Apple">
        <a href="">
          <div class="mask rgba-white-slight"></div>
        </a>
      </div>
      <div class="card-body text-center">                      
        <h3>
          <strong >
            <a href="" class="black-text">${name}</a>
          </strong>
        </h5>
        <span class="grey-text fw-bold fs-2"><i class="far fa-check-circle text-success"></i>
          <span class="fw-bold fs-2"> ${inStock}</span> left in stock</span>
                             
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