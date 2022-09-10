const synth = window.speechSynthesis
const speakBtn = document.getElementById('speak')
const stopBtn = document.getElementById('stop')
const textBox = document.getElementById('speak-text')
const voiceSelect = document.getElementById('voice')
const speed = document.getElementById('speed')
let speedRate = speed.value
const pitch = document.getElementById('pitch')
let pitchRate = pitch.value

speakBtn.addEventListener('click', () => {
	console.log("Button clicked:", speakBtn)
	const utterance = new SpeechSynthesisUtterance(textBox.value)
	console.log("Speech utterance", utterance)
	console.log(speed, speedRate, pitch, pitchRate)
	utterance.speed = speedRate
	utterance.pitch = pitchRate
	synth.speak(utterance)
})

pitch.onchange = function () {
	pitchRate = pitch.value
}

speed.onchange = function () {
	speedRate = speed.value
}

