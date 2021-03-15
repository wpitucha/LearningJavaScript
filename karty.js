const cardsColor = ['red', 'red', 'green', 'green', 'blue', 'blue', 'brown', 'brown',
'yellow', 'yellow', 'darkgreen', 'darkgreen', 'violet', 'violet', 'purple', 'purple', 'gray', 'gray'];

let cards = document.getElementsByClassName('karta');
cards = [...cards];

let activeCard = '';
const activeCards = [];

const gamePairs = cards.length/2;
let gameResult = 0;

const clickCard = function() {
    //console.log('click');
    activeCard = this;
    activeCard.classList.remove('hidden');

    if(activeCards.length === 0) {
        //console.log('1');
        activeCards[0] = activeCard;
        return;
    }
    else {
        cards.forEach(card => {
            card.removeEventListener('click', clickCard)
        })
        activeCards[1] = activeCard;
        console.log(activeCards);
        setTimeout(function(){
            if(activeCards[0].className === activeCards[1].className) {
                //console.log('win');
                activeCards.forEach(card => {
                    card.classList.add('off');
                })
            }
            else {
                //console.log('lose');
                activeCards.forEach(card => {
                    card.classList.add('hidden');
                })
            }
            activeCard = '';
            activeCards.length = 0;
            
            cards.forEach(card => card.addEventListener('click', clickCard))
        }, 500)


    }
}

const init = function() {
    cards.forEach(function(card) {
        const position = Math.floor(Math.random()*cardsColor.length);
        card.classList.add(cardsColor[position]);
        cardsColor.splice(position, 1);

        setTimeout(function(){
            cards.forEach(function(card){
                card.classList.add('hidden');
                card.addEventListener('click', clickCard)
            });
        }, 2000)
    });
}

init();