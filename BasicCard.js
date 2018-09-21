var inquirer = require("inquirer");

var cards = []
var i = 0
front = this.front
back = this.back

// create a basic card constructor
function question(front, back) {
	this.front = front
	this.back = back
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
				name: "q",
				message: (cards.front)
			}
		]).then(function (answer) {

			if ((answer.q) === cards[i].back) {
				console.log("CORRECT");
				i++
				run();
			}
				console.log("WRONG");
				console.log("wrong, correct answer is: " + cards[i].back);
				i++
				run();
			})

		}
	}

run();

module.exports = BasicCard;
