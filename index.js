const cards = ["Guadalupe", "Ollie", "Aki"];
const sentCards = [];


function writeCards(cards) {
 for (let thankYou = 0; thankYou < cards.length; thankYou++) {
   sentCards.push(`Thank you, ${cards[thankYou]}, for the wonderful surprise gift!`);
 }
 return sentCards; }


function countDown (integer){   
    while (integer >= 0){
        console.log(integer);
        integer--;
    }
}

countDown ();
