const counter = document.getElementById("counter");
const cost = document.getElementById("cost");
const clickersInfo = document.getElementById("clickersInfo");
const fathers = document.getElementById("fathers");
var cookies = 0;
var cookieRate = 1;
var multiplier = 1;
var multiplierCost = 10;
var clickers = 0;
var clickerCost = 50;

setInterval(update, 100)
setInterval(autoClick, 1000)

function update() {
	counter.innerHTML = "Cookies: " + cookies;
	cost.innerHTML = "Multiplier: " + multiplier + " - Multiplier Cost: "
 + multiplierCost;
	clickersInfo.innerHTML = "Auto Clickers: " + clickers + " - Auto Clicker Cost: " + clickerCost;
}

function Cookie() {
	cookies = cookies + cookieRate * multiplier;
}

function multiply() {
	if (cookies >= multiplierCost) {
			multiplier = multiplier + 1;
			cookies = cookies - multiplierCost;
			multiplierCost = Math.floor(multiplierCost * 1.5);
	}
}

function purchaseAutoClicker() {
	if (cookies >= clickerCost) {
			clickers++;
			cookies = cookies - clickerCost;
			clickerCost = Math.floor(clickerCost * 1.5);
	}
}

function autoClick() {
	cookies = cookies + clickers * multiplier;
}

function upgrade() {
	var amount = document.getElementById("amount");
	if (amount.value == 436 && multiplier >= 2) {
		multiplierCost = 0;
		clickerCost =  0;
		multiplier = multiplier * 5;
		cookies = cookies * 100;
	} else if (multiplier >= 5) {
		cookies = 0;
		cookieRate = 0;
		multiplier = 0;
		multiplierCost = 1;
		clickers = 0;
		clickerCost =  1;
		fathers.innerHTML = "loser, your parents hate you."
	} else if (amount.value == 69) {
		window.open("https://lumiere-a.akamaihd.net/v1/images/character_themuppets_kermit_b77a431b.jpeg?region=0%2C0%2C450%2C450", "_blank")
	}
}