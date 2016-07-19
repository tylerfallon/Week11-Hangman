// Randomly selects a word for the player

exports.randomizer = {
	wordChoices: ['ORIENTAL AVENUE','BOARDWALK','PARK PLACE', 'READING RAILROAD', 'ILLINOIS AVENUE', 'NEW YORK AVENUE', 'VERMONT AVENUE', 'CONNECTICUT AVENUE', 'PENNSYLVANIA AVENUE', 'SHORT LINE', 'ELECTRIC COMPANY'],
	WordChooser: function(randomNum) {
		return (this.wordChoices[randomNum]);
	}   	       
};