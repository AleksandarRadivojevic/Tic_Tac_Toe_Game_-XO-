var player1;
var player2;
var winner;
var blockGame = false;
var radioComputer;

displayStart();

function displayStart() {
	document.getElementById('computer').style = "display: none;";
	document.getElementById('alertSuccessP1').style = "display: none;";
	document.getElementById('alertSuccessP2').style = "display: none;";
	document.getElementById('alertDangerP1').style = "display: none;";
	document.getElementById('alertDangerP2').style = "display: none;";
	document.getElementById('btnStartGame').style = "display: none;";
	document.getElementById('backgroundOfGame').style = "display: none;";
	document.getElementById('winner').style = "display: none;";
	document.getElementById('radioHuman').checked = true;
}

function resetValidation() {
	document.getElementById('alertSuccessP1').style = "display: none;";
	document.getElementById('alertSuccessP2').style = "display: none;";
	document.getElementById('alertDangerP1').style = "display: none;";
	document.getElementById('alertDangerP2').style = "display: none;";
	document.getElementById('btnStartGame').style = "display: none;";
	document.getElementById('computer').style = "display: none;";
}
function validation(HumanComputer) {
	resetValidation();

	if (HumanComputer == 'Human') {
		document.getElementById('inputP2').style = "display: block;";
		document.getElementById('radioHuman').checked = true;
	}

	if (HumanComputer == 'Computer') {
		document.getElementById('inputP2').style = "display: none;";
		document.getElementById('computer').style = "display: block;";
		document.getElementById('alertSuccessP2').style = "display: block;";
		document.getElementById('radioComputer').checked = true;
		player2 = 'Computer';
	}

	player1 = document.getElementById('inputP1').value;
	player2 = document.getElementById('inputP2').value;
	radioComputer = document.getElementById('radioComputer').checked;

	if (radioComputer)
		document.getElementById('computer').style = "display: block;";

	if (!player1) {
		document.getElementById('alertDangerP1').style = "display: block;";
	} else document.getElementById('alertSuccessP1').style = "display: block;";

	if (!player2 && !radioComputer) {
		document.getElementById('alertDangerP2').style = "display: block;";
	} else document.getElementById('alertSuccessP2').style = "display: block;";

	if ((player1 && player2) || (player1 && radioComputer)) {
		document.getElementById('btnStartGame').style = "display: block;";
	}
}

// display after press button really start game
function displayStartGame() {
	document.getElementById('header').style = "display: none;";
	document.getElementById('backgroundOfGame').style = "display: block;";
	document.getElementById('backgroundOfGame').style = "margin-top: 50px;";
}

var XO = "X";
//on click change X O
function Switch() {
	XO;
	if (XO == "X")
		XO = "0";
	else XO = "X";
}

function CheckWin(id) {
	if (!blockGame) {
		var field = document.getElementById(id).textContent;
		if (field == '') {
			document.getElementById(id).innerHTML = XO;
			getWinner();
			if (radioComputer == true) {
				computerPlay();
			}
		}
		else alert('You alredy have value on this field');
	}
	else {
		alert('Game is complited, Play new one?');
		document.getElementById('winner').style = "display: none;";
		var thumb1 = document.getElementById("thumb1").textContent = '';
		var thumb2 = document.getElementById("thumb2").textContent = '';
		var thumb3 = document.getElementById("thumb3").textContent = '';
		var thumb4 = document.getElementById("thumb4").textContent = '';
		var thumb5 = document.getElementById("thumb5").textContent = '';
		var thumb6 = document.getElementById("thumb6").textContent = '';
		var thumb7 = document.getElementById("thumb7").textContent = '';
		var thumb8 = document.getElementById("thumb8").textContent = '';
		var thumb9 = document.getElementById("thumb9").textContent = '';
		blockGame = false;
	}
}

function getWinner() {
	var thumb1 = document.getElementById("thumb1").textContent;
	var thumb2 = document.getElementById("thumb2").textContent;
	var thumb3 = document.getElementById("thumb3").textContent;
	var thumb4 = document.getElementById("thumb4").textContent;
	var thumb5 = document.getElementById("thumb5").textContent;
	var thumb6 = document.getElementById("thumb6").textContent;
	var thumb7 = document.getElementById("thumb7").textContent;
	var thumb8 = document.getElementById("thumb8").textContent;
	var thumb9 = document.getElementById("thumb9").textContent;

	// Horizontal
	if (thumb1 == XO && thumb2 == XO && thumb3 == XO) {
		showWinner(XO);
	} else if (thumb4 == XO && thumb5 == XO && thumb6 == XO) {
		showWinner(XO);
	} else if (thumb7 == XO && thumb8 == XO && thumb9 == XO) {
		showWinner(XO);
	}
	// Vertical
	else if (thumb7 == XO && thumb4 == XO && thumb1 == XO) {
		showWinner(XO);
	} else if (thumb8 == XO && thumb5 == XO && thumb2 == XO) {
		showWinner(XO);
	} else if (thumb9 == XO && thumb6 == XO && thumb3 == XO) {
		showWinner(XO);
	}
	// Diagonal
	else if (thumb3 == XO && thumb5 == XO && thumb7 == XO) {
		showWinner(XO);
	} else if (thumb1 == XO && thumb5 == XO && thumb9 == XO) {
		showWinner(XO);
	} else if (thumb1 != '' && thumb2 != '' && thumb3 != '' && thumb4 != '' && thumb5 != '' && thumb6 != '' && thumb7 != '' && thumb8 != '' && thumb9 != '') {
		showWinner('draw');
	}
	Switch();
}

function showWinner(XO) {
	// Have a winner
	if (XO != 'draw') {
		if (XO == 'X')
			winner = player1;
		else if (XO == '0')
			winner = player2;
	}
	// Draw
	else {
		winner = 'Nerešeno';
	}
	// Show winner
	document.getElementById('winner').style = "display: block;";
	if (radioComputer == true) {
		if (XO == '0') {
			document.getElementById('winnerName').textContent = "Computer";
		} else {
			document.getElementById('winnerName').textContent = winner;
		}
	}else {
		document.getElementById('winnerName').textContent = winner;
	}
	blockGame = true;
}

function computerPlay() {
	var thumb1 = document.getElementById("thumb1").textContent;
	var thumb2 = document.getElementById("thumb2").textContent;
	var thumb3 = document.getElementById("thumb3").textContent;
	var thumb4 = document.getElementById("thumb4").textContent;
	var thumb5 = document.getElementById("thumb5").textContent;
	var thumb6 = document.getElementById("thumb6").textContent;
	var thumb7 = document.getElementById("thumb7").textContent;
	var thumb8 = document.getElementById("thumb8").textContent;
	var thumb9 = document.getElementById("thumb9").textContent;

	if (!thumb1) {
		document.getElementById("thumb1").innerHTML = XO;
		getWinner();
		return
	} else if (!thumb2) {
		document.getElementById("thumb2").innerHTML = XO;
		getWinner();
		return
	} else if (!thumb3) {
		document.getElementById("thumb3").innerHTML = XO;
		getWinner();
		return
	} else if (!thumb4) {
		document.getElementById("thumb4").innerHTML = XO;
		getWinner();
		return
	} else if (!thumb5) {
		document.getElementById("thumb5").innerHTML = XO;
		getWinner();
		return
	} else if (!thumb6) {
		document.getElementById("thumb6").innerHTML = XO;
		getWinner();
		return
	} else if (!thumb7) {
		document.getElementById("thumb7").innerHTML = XO;
		getWinner();
		return
	} else if (!thumb8) {
		document.getElementById("thumb8").innerHTML = XO;
		getWinner();
		return
	} else if (!thumb9) {
		document.getElementById("thumb9").innerHTML = XO;
		getWinner();
		return
	}
}