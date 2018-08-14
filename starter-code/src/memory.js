/* var MemoryGame = function (cards,) {
 
};


 MemoryGame.prototype.shuffleCard = function (cardsArr) {
  
 };


 MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {


 }

 MemoryGame.prototype.finished = function () {

};

*/ 

class MemoryGame{
    constructor(cards){
        this.cards = cards
        this.pickedCards=[];
        this.pairsClicked=0;
        this.pairsGuessed=0
    }
    shuffleCard (cardsArr){
        return cardsArr.sort(function(a,b){
            return Math.random()-0.5
        })

    }
    checkIfPair(firstCard, secondCard){
        this.pairsClicked ++
        if(firstCard === secondCard){
            this.pairsGuessed ++
            return true
        }else{
            return false
        }
    }
    finished(){
return this.pairsGuessed === this.cards.length/2;
    }
}