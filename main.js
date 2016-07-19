// Run this file to play the game

// Get data from other files

var gameRandomizer = require('./game.js');
var letterChooser = require('./Letter.js');
var checker = require('./Word.js');

// Modules for game functionality

var inquirer = require('inquirer');
var clear = require('clear');

// Variables to be used to keep track of stats
var wordArray = [];
var wordVisible = "";
var userInput = "";
var theWord = "";
var choice = "";
var numGuesses = 0;
var counter = 0;


// Set up the game by running these functions

function startGame() {
	theWord = chooseWord();
	setBlanks(theWord);
	wordShow();
	enterGuess();
} 

startGame();


// Choose a random word using the game.js file WordChooser

function chooseWord () {
	var randomNum = randomNumber(0, gameRandomizer.randomizer.wordChoices.length - 1);
	theWord = gameRandomizer.randomizer.WordChooser(randomNum);
	return theWord;
};


// Calculate random value for use in selecting a new word

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};


// Set blank spaces when the game starts 

function setBlanks() {
	for (var i=0; i<theWord.length; i++) {
 		wordArray[i] = '_';
 	}
};


// Check the game score to see whether or not to end the game

function analyzer() {
	var checkThis = new checker (choice, theWord);
	if (checkThis.wordCheck() == true) {
  	letterChooser.Letter(choice, theWord, wordArray);
	}
	else {
  	counter++;
	};
	wordShow(); 

	if (counter < 11 && theWord != wordArray.join("")) {
		enterGuess();
	}
	else if (counter >10 && theWord != wordArray.join("")) {
		console.log("You lost!");
	}
	else {
		console.log("You won!");
	}
} 


// Show the user the spaces and letters guessed so far

function wordShow() {
	wordVisible = "";
	for (var i = 0; i< theWord.length; i++) {
		wordVisible  += wordArray[i] + " ";
	}
	console.log("What is this word? -->   " + wordVisible);
};


// Run inquirer to get user guess, then process the input

function enterGuess() {
 inquirer.prompt([ {
 	name: 'pickLetter', 
 	message: 'Enter a guess: ', 
 	type:'input', 
 	validation: function (input) { 
 	if (input.length > 1 ) {
		return(0); }
	else {
		return(1);
	}
}
 }]).then(function(correctLetter) {
 	choice = correctLetter.pickLetter.toUpperCase();
 	numGuesses++;
 	if (userInput.includes(correctLetter.pickLetter.toUpperCase())) {
    console.log("Letter already chosen!");
  }
 	else {
 		userInput += correctLetter.pickLetter.toUpperCase();
 		console.log("Letters already guessed: " + userInput);
  }
 analyzer();
 });
};
