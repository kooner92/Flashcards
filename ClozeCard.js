var inquirer = require("inquirer");

var cards = [];
var i = 0;
var clozeText
var CLOZE = [];

// create a basic card constructor
function question(text, cloze) {
	this.text = text
	this.cloze = cloze
}

CLOZE.prototype = function () {
	clozeDeleted = this.cloze
	clozeText = this.text
	clozeText = clozeText.replace("...", clozeDeleted);
	console.log(clozeText);
}

// create (questions, answers) and push them into cards array

var card1 = question("What year did the Oakland Warriors win their first Championship?", "1947");
var card2 = question("How many MVP trophies did Michael Jordan win?", "5");
var card3 = question("What are the the most points Kobe Bryant ever scored in a game?", "81");
var card4 = question("How many NBA championships does Kobe Bryant have?", "5");
var card5 = question("How many NBA teams are in the league?", "30");
var card6 = question("How many states are in the U.S?", "5");
var card7 = question("How many presidents have served in the U.S?", "45");
var card8 = question("How many presidents have been impeached", "2");
var card9 = question("How many known planets are in our Solar System", "8");
var card10 = question("How many minutes are in a day", "1440");

cards.push(card1);
cards.push(card2);
cards.push(card3);
cards.push(card4);
cards.push(card5);
cards.push(card6);
cards.push(card7);
cards.push(card8);
cards.push(card9);
cards.push(card10);


function run() {
	if (i < cards.length) {

		inquirer.prompt([
			{
				name: "part",
				message: cards.text
			}
		]).then(function (answer) {

			if ((answer.part) === cards.cloze) {
				console.log("correct");
				i++
				run();
			}
			else {
				console.log("incorrect");
				i++
				run();
			}
		});

	}
}

run();

module.exports = CLOZE;
