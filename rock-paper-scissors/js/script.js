// Arif Faysal
// 991652842

let variants 		= [ 'Rock', 'Paper', 'Scissors' ]
let playerScore 	= 0;
let computerScore 	= 0;

let btnElm 				= document.querySelector('button')
let playerChoice 		= document.querySelector('.player-choice')
let computerChoice 		= document.querySelector('.computer-choice')
let playerMainPoint 	= document.querySelector('.player-score')
let computerMainPoint 	= document.querySelector('.computer-score')
let pointDifferences 	= document.querySelector('#bottom-result-1')
let whoIsWinning 		= document.querySelector('#bottom-result-2')


function reset() {
	playerScore 				= 0;
	computerScore 				= 0;
	playerChoice.innerHTML 		= 'x';
	computerChoice.innerHTML 	= 'x';
	playerMainPoint.innerHTML	= 0;
	computerMainPoint.innerHTML = 0;
	pointDifferences.innerHTML 	= 'Who will Win ?';
	whoIsWinning.innerHTML 		= 'Points Equal';
}

function updateMessage(){
	
	if( playerScore > computerScore ) {
		pointDifferences.innerHTML = `Player is ahead by ${ (playerScore) - (computerScore) } points`
		whoIsWinning.innerHTML = `Player is Winning`
		pointDifferences.style = 'color:#2348fe'
		whoIsWinning.style = 'color:#2348fe'
	} else if ( playerScore < computerScore ) {
		pointDifferences.innerHTML = `Computer is ahead by ${ (computerScore) - (playerScore) } points`
		whoIsWinning.innerHTML = `Computer is Winning`
		pointDifferences.style = 'color:#f73636'
		whoIsWinning.style = 'color:#f73636'
	} else if ( playerScore === computerScore ) {
		pointDifferences.innerHTML = `!!! Draw !!!`
		whoIsWinning.innerHTML = `Points Equal`
		pointDifferences.style = 'color:#141213'
		whoIsWinning.style = 'color:#141213'
	} else { 

	}
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function isValidInput(val) {
	let x = parseInt(val)
	if( !isNaN(val) && (x > 0 && x <4 ) ) {
		return true;
	} else {
		return false;
	}
}

function game(userInput) {
	let input = parseInt(userInput)
	let rand = getRandomInt(3) + 1

	playerChoice.innerHTML = variants[input-1]
	computerChoice.innerHTML = variants[rand-1]

	if( input === rand ){

	} else if ( input === 1 && rand === 2 ) {
		++computerScore;
	} else if ( input === 2 && rand === 1 ) {
		++playerScore;
	} else if ( input === 2 && rand === 3 ) {
		++computerScore;
	} else if ( input === 3 && rand === 2 ) {
		++playerScore;
	} else if ( input === 3 && rand === 1 ) {
		++computerScore;
	} else if ( input === 1 && rand === 3 ) {
		++playerScore;
	} else {

	}

	playerMainPoint.innerHTML = playerScore
	computerMainPoint.innerHTML = computerScore

	updateMessage()

	// console.log(playerScore)
	// console.log(computerScore)

}

function play() {

	let input = prompt('Enter Your Choice')

	while(!isValidInput(input)) {
		input = prompt('Enter Your Choice')
	}

	game(input);

	setTimeout(() => {
	 	if(confirm('keep playing?') == true) {
		play()
		} else {
			btnElm.style= "display:block; margin:auto";
		}
	 }, 300);
}

btnElm.addEventListener('click', (e) => {

	reset();

	 setTimeout(() => {
	 	btnElm.style="display:none";
	 }, 300);

	 alert(`1: Rock, 2: Paper, 3: Scissors`)

	 setTimeout(() => {
	 	play();
	 }, 300);

})



