const synth = window.speechSynthesis
const speakBtn = document.getElementById('speak')
const stopBtn = document.getElementById('stop')
const textBox = document.getElementById('speak-text')
const voiceSelect = document.getElementById('voice')
const speedRate = document.getElementById('speed')
const pitchRate = document.getElementById('pitch')

speakBtn.addEventListener('click', () => {
	console.log("Button clicked:", speakBtn)
	const utterance = new SpeechSynthesisUtterance(textBox.value)
	console.log("Speech utterance", utterance)
	synth.speak(utterance)
})
