function scoreAboveSeventy(array){
    let score = [];
     score = array.filter(element => element >= 70);

     return score;
    }
    console.log(scoreAboveSeventy([40,50,70,73,75,89,77,33,44,67,88,86]))

    
function addFiveMarksToScore(array){
    let score = [];
    score = array.map(element => element + 5);
    return score;
}
console.log(addFiveMarksToScore([40,50,70,73,75,89,77,33,44,67,88,86]))

function squareOfNumbers(array){
    let score = [];
    score = array.map(element => element * element);
    return score;
}
console.log(squareOfNumbers([2,3,4,5,6,7,9]))

function distributeBook(names, books){
    let bookClub = {};
    let index = 0;
    for(let name in names){
        for(let book in books){
            bookClub.push("name:book");
        }
    }
    return bookClub

}
console.log(distributeBook(["Mark", "Emily", "Jack", "Sophia"], ["Book1", "book2", "book3", "Book4"]))
//module.exports = {scoreAboveSeventy,addFiveMarksToScore, squareOfNumbers };
