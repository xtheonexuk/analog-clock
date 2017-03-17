
const secondHand = document.getElementById('secondHand')
const minHand    = document.getElementById('minuteHand')
const hourHand   = document.getElementById('hourHand')

function updateHands() {
	const now = new Date()

	const seconds = now.getSeconds()
	const secondsDegrees = ((seconds / 60) * 360) + 90

	const mins = now.getMinutes()
	const minsDegrees = ((mins / 60) * 360) + 90

	const hour = now.getHours()
	const hourDegrees = ((hour / 12) * 360) + 90

	secondHand.style.transform = `rotate(${secondsDegrees}deg)`
	minHand.style.transform    = `rotate(${minsDegrees}deg)`
	hourHand.style.transform   = `rotate(${hourDegrees}deg)`
}

updateHands()

setInterval(updateHands, 1000)
