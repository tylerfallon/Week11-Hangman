module.exports = Word;

// Constructor to check the letters guessed against the random word selected

function Word(letter, theAnswer) {
	this.letter = letter,
	this.theAnswer = theAnswer;
};

Word.prototype.wordCheck = function() { 
	if (this.theAnswer.includes(this.letter.toUpperCase())) {
  	return(1);
	}
	else {
		return(0);
	}
};