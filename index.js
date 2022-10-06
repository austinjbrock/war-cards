let deckId;
let cardDisplayBox = document.getElementById('card-display-box')
function getDeckFunction (){
      fetch('https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/')
      .then(res =>res.json())
      .then(data => {
         deckId = data.deck_id
         console.log(deckId)
      })

}

// this function will draw two random cards. the DeckID has been input as a template variable so the API knows which deck to pull from
function drawCards(){
   fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
   .then(res =>res.json())
   .then( data => {
      cardDisplayBox.innerHTML = `
      <img src=${data.cards[0].image} />
      <img src=${data.cards[1].image} />
      `
      cardDisplayBox.classList.add('center-card-img')

   })
}


document.getElementById('new-deck').addEventListener('click',getDeckFunction)

document.getElementById('draw-cards').addEventListener('click', drawCards)
