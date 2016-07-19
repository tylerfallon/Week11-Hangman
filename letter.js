// Constructor function that takes in the letter guessed by the user and searches the answer
// for that letter, returning either a '_' or the letter on the screen

exports.Letter = function(letGuess, answer, wordGuess) {
  this.wordGuess = wordGuess,
  this.letGuess = letGuess,
  this.answer = answer,
  this.inserter= function() {
    for (var i=0; i<this.answer.length; i++) {
      var letGuessUpper = this.letGuess.toUpperCase();
      var answerParse = this.answer.substr(i, 1);
      if (letGuessUpper == answerParse) {
        this.wordGuess[i] = this.letGuess.toUpperCase();
      }
    }
    return this.wordGuess;
  }

this.inserter();

};