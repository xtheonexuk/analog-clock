'use strict';

var secondHand = document.getElementById('secondHand');
var minHand = document.getElementById('minuteHand');
var hourHand = document.getElementById('hourHand');

function updateHands() {
	var now = new Date();

	var seconds = now.getSeconds();
	var secondsDegrees = seconds / 60 * 360 + 90;

	var mins = now.getMinutes();
	var minsDegrees = mins / 60 * 360 + 90;

	var hour = now.getHours();
	var hourDegrees = hour / 12 * 360 + 90;

	secondHand.style.transform = 'rotate(' + secondsDegrees + 'deg)';
	minHand.style.transform = 'rotate(' + minsDegrees + 'deg)';
	hourHand.style.transform = 'rotate(' + hourDegrees + 'deg)';
}

updateHands();

setInterval(updateHands, 1000);
