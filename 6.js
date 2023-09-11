let player = {
    Name: "its me",
    Chips: 200
}
let cards = [] //array - orderes list of items
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.querySelector("#cards-el")



let playerEl = document.getElementById("player-el")
playerEl.textContent = player.Name + ": $" + player.Chips



//here querySelector can br used instead of getElementById

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard,secondCard]
    sum = firstCard+secondCard
    renderGame()
}

function getRandomCard(){
    let randomNumbers = Math.floor(Math.random()*13)+1
    if(randomNumbers>10){
        return 10
    }
    else if(randomNumbers === 1){
        return 11
    }
    else{
        return randomNumbers
    }
}

function renderGame(){
    sumEl.textContent ="Sum:" + sum
    cardsEl.textContent = "Cards:" 
    for(let i=0; i<cards.length; i++){
        cardsEl.textContent += cards[i] +" "
    }
    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳"
        hasBlackJack = true
    } else {
        message = "You're out of the game! 😭"
        isAlive = false
    }
    messageEl.textContent = message
}
function newCard(){
    if(isAlive===true && hasBlackJack===false){
        let card = getRandomCard()
        sum+=card
        cards.push(card)
        renderGame()
    }
}