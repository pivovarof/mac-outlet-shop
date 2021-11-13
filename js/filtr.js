document.querySelector('.filtr-btn').onclick = clickFiltr;
const cardsFilter = document.getElementById('cards');
function clickFiltr(){

    let from = document.querySelector('.input-from').value;
    let to = document.querySelector('.input-to').value;

    for (let i of items){
        let img = i.imgUrl;
        let name = i.name;
        let inStock = i.orderInfo.inStock;
        let price = i.price;
        if (price >= from && price <= to){
           
        }
    }
}