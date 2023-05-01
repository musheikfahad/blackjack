// generate a random number between 2 and 11
// let randomNumber1 = Math.floor(Math.random() * 10) + 2;
// let randomNumber2 = Math.floor(Math.random() * 10) + 2;


function getRandomCard(){
   let c = Math.floor(Math.random() * 13) +1 ;
  if( c===1){
    return 11;
  }
  else if (c>10){
    return 10;
  }
  else
    return c;
}

// print the random number to the console
// console.log(randomNumber);

// let firstCard = getRandomCard();
// let secondCard = getRandomCard();
// let cards = [firstCard , secondCard]
let cards = []
// let sum = firstCard + secondCard
let sum =0;
let hasBlackJack = false
let isAlive = false
let message = ""



let messageEl = document.getElementById("message-el");
// let sumEl = document.getElementById("sum-el");
// let sumEl = document.querySelector("#sum-el");
let sumEl = document.querySelector(".sum-el");
let cardsEl = document.getElementById("cards-el")
// let sumEl = document.querySelector("body");

//objects
let player = {
    name: "Mushek",
    chips: 145
}


let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips
console.log(cards) // even before cliciking start button card are generated

function startGame(){
    isAlive =true;
    let firstCard = getRandomCard();
    let secondCard=getRandomCard();
     cards = [firstCard,secondCard]
     sum=firstCard+secondCard

    renderGame();
}

function renderGame(){
    //   cardsEl.textContent ="Cards: "+ cards[0] + " "+ cards[1];
cardsEl.textContent = "Cards: "

for (let i =0 ; i <cards.length ; i++){

    cardsEl.textContent +=cards[i]+ " ";

}
sumEl.textContent ="Sum: "+sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card? 😃"
    } else if (sum === 21) {
        message = "You've got Blackjack! 🥳"
        hasBlackJack = true
    } else {
        message = "You're out of the game!🤨"
        isAlive = false
    }

  messageEl.textContent=message;
  

    // console.log(message)
}


// let randomNumber3 = Math.floor(Math.random() * 10) + 2;
function newCard(){
    if(isAlive===true && hasBlackJack===false){
        // let anotherCard= 5;
    // generate a random number between 2 and 11


// print the random number to the console
// console.log(randomNumber);
    let card = getRandomCard();
    sum += card; 
    // sum += getRandomCard();; 
    cards.push(card);
    // cards.push(getRandomCard());
    renderGame();
    // console.log(cards)
    }
}
