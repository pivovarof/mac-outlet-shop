document.querySelector('.filtr-btn').onclick = clickFiltr;
const cardsFilter = document.getElementById('cards');
const allCards = document.getElementsByClassName('cards-lok')
const checkRed = document.querySelector('.check_red')



function clickFiltr(){
    addCards();
    let from = Number (document.querySelector('.input-from').value);
    let to = Number (document.querySelector('.input-to').value);
           
    let prices = document.getElementsByClassName('string-price');     

    let price;

    let arrPrices = Array.from(prices)
    arrPrices.forEach(item => {
 
        price = Number((item.textContent).replace('$',''));
        
        if ( !(price  >= from && price <= to)){  

            item.closest('.cards-lok').classList.add('hide');
            item.closest('.cards-lok').remove();
          
            
           
        }
    })     
             

  
}

document.querySelectorAll('.order').forEach((elem) => {
    elem.onclick = orderFunction;
})


