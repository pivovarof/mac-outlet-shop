document.querySelector('.filtr-btn').onclick = clickFiltr;
const cardsFilter = document.getElementById('cards');
const allCards = document.getElementsByClassName('cards-lok')



function clickFiltr(){
    addCards();
    let from = Number (document.querySelector('.input-from').value);
    let to = Number (document.querySelector('.input-to').value);
           
    let prices = document.getElementsByClassName('string-price');
    // let blockHide = document.querySelectorAll('.string-price')
    

    let price;

    let arrPrices = Array.from(prices)
    arrPrices.forEach(item => {
        item.textContent = item.textContent.replace('$','');
        price = Number(item.textContent)
        
        if ( !(price >= from && price <= to)){  

            item.closest('.cards-lok').classList.add('hide');
            item.closest('.cards-lok').remove();
            
        }
    })
        
    
    
      

// }
  
}