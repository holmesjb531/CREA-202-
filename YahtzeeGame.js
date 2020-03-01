
const playerOne =  'Jalen';
const playerTwo = 'Dan';
let dieArr = ['die1', 'die2', 'die3', 'die4', 'die5'];
let totalScore = 0;
let totalScore2 = 0;
let typeOfScore;



function determineDiceRoll(player){
  for(let i = 0; i < dieArr.length; i++){
    dieArr[i] = Math.ceil(Math.random() * 6);

  }
  dieArr.sort();
 let allRolls = [dieArr[0], dieArr[1], dieArr[2], dieArr[3], dieArr[4]];
 console.log(player + ' rolled: ' + allRolls);
 

}


function determineScore(player){

	let point100 = 100;
	let point75 = 75;
	let point50 = 50;
	let dieSum = dieArr[0] + dieArr[1] + dieArr[2] + dieArr[3] + dieArr[4];
	

	
	
	for(let i = 0; i < dieArr.length; i++){

		if(dieArr[i] === dieArr[i + 1] && dieArr[i + 1] === dieArr[i + 2] &&
		 dieArr[i + 2] === dieArr[i + 3] && dieArr[i + 3] === dieArr[i + 4]){

 			typeOfScore = 'YAHTZEE!:';
     	    console.log(`${player} scored ${typeOfScore} ${point100} points.`);
     	    break;
 	 	} 

 	 	else if((dieArr[i] === 1 && dieArr[i + 1] === 2 && dieArr[i + 2] === 3 && dieArr[i + 3] === 4 && dieArr[i + 4] === 5) ||
 	 		(dieArr[i] === 2 && dieArr[i + 1] === 3 && dieArr[i + 2] === 4 && dieArr[i + 3] === 5 && dieArr[i + 4] === 6)){
 	 		typeOfScore = 'Straight:';
       		console.log(`${player} scored ${typeOfScore} ${point100} points.`);
       		break;
 	 	}

		else if(dieArr[i] === dieArr[i + 1] && dieArr[i + 1] === dieArr[i + 2] && dieArr[i + 2] === dieArr[i + 3] || 
			(dieArr[i + 1] === dieArr[i + 2] && dieArr[i + 2] === dieArr[i + 3] && dieArr[i + 3] === dieArr[i + 4])){

			typeOfScore = '4 of a Kind:';
     	    console.log(`${player} scored ${typeOfScore} ${point75} points.`);
			break;
		}

		else if((dieArr[i] === dieArr[i+1] && dieArr[i+1] === dieArr[i+2]) || 
			(dieArr[i + 1] === dieArr[i+2] && dieArr[i+2] === dieArr[i+3]) ||
			(dieArr[i + 2] === dieArr[i+3] && dieArr[i+3] === dieArr[i+4])){

			typeOfScore = '3 of a Kind:';
     	    console.log(`${player} scored ${typeOfScore} ${point50} points.`);
			break;
			
		}

		else if(dieArr[i] != dieSum[i]) {

			typeOfScore = 'Chance:';
			console.log(`${player} scored ${typeOfScore} ${dieSum} points.`);
			break;


		}

	}

	

}

function currentScore(player){


	diceSum = dieArr[0] + dieArr[1] + dieArr[2] + dieArr[3] + dieArr[4];

	if(typeOfScore === 'Chance:'){
		if(player === playerOne){
			totalScore = totalScore + diceSum;
		}
		else {
			totalScore2 = totalScore2 + diceSum;
		}
	} 

	else if(typeOfScore === 'YAHTZEE!:'){
		if (player === playerOne) {
			totalScore = totalScore + 100;
		}
		else {
			totalScore2 = totalScore2 + 100;
		}
	}

	else if(typeOfScore === 'Straight:'){
		if (player === playerOne) {
			totalScore = totalScore + 100;
		}
		else {
			totalScore2 = totalScore2 + 100;
		}
	}

	else if(typeOfScore === '3 of a Kind:'){
		if (player === playerOne) {
			totalScore = totalScore + 50;
		}
		else {
			totalScore2 = totalScore2 + 50;
		}
	}

	else if(typeOfScore === '4 of a Kind:'){
		if (player === playerOne) {
			totalScore = totalScore + 75;
		}
		else {
			totalScore2 = totalScore2 + 75;
		}
	}

	if(player === playerOne){

		console.log(`${player} current total score: ${totalScore}`);

	} else {

		console.log(`${player} current total score: ${totalScore2}`);
	}


	
}


console.log(`Today's Yahtzee match-up is: ${playerOne} vs. ${playerTwo}`);


function fullGame() {
	
	for(let i = 1; i <- 10; i++){

		console.log("========== Round " + i + " ==========");
		console.log();
		determineDiceRoll(playerOne);
		determineScore(playerOne);
		currentScore(playerOne);
		determineDiceRoll(playerTwo);
		determineScore(playerTwo);
		currentScore(playerTwo);
		

	}

	console.log("========== FINAL SCORE ==========");
	console.log(`${playerOne} scored: ${totalScore}`);
	console.log(`${playerTwo} scored: ${totalScore2}`);
	console.log();

	if(totalScore > totalScore2){

		console.log(`${playerOne} is the winner!`);
	}
	else {
		console.log(`${playerTwo} is the winner!`);
	}
}

fullGame();

