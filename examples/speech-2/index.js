const synth = window.speechSynthesis
const speakButton = document.getElementById("speak")
const speakInput = document.getElementById("speak-text")
const stopButton = document.getElementById("stop")
const speedRate = document.getElementById("speed")
const pitchRate = document.getElementById("pitch")
const voiceSelect = document.getElementById("voice")

// const voiceList = synth.getVoices().forEach((voice) => {
// 	const newVoice = voice
// 	voice.textContent = `${voice.name}`
// })
//console.log(voiceList)
//console.log("Console getVoices", synth.getVoices())

//MDN Code

function populateVoiceList() {
	voices = synth.getVoices()

	for (let i = 0; i < voices.length; i++) {
		const option = document.createElement("option")
		option.textContent = `${voices[i].name} (${voices[i].lang})`

		if (voices[i].default) {
			option.textContent += " — DEFAULT"
		}

		option.setAttribute("data-lang", voices[i].lang)
		option.setAttribute("data-name", voices[i].name)
		voiceSelect.appendChild(option)
	}
}
populateVoiceList()
//

// Speak/Pause/Stop Voice
speakButton.addEventListener("click", () => {
	console.log("Speech activated")
	const utterance = new SpeechSynthesisUtterance(speakInput.value)
	if (synth.paused) {
		synth.resume()
		speakButton.innerText = "Pause Speech"
	} else if (synth.speaking) {
		synth.pause()
		speakButton.innerText = "Resume Speach"
	} else {
		synth.speak(utterance)
		speakButton.innerText = "Pause Speaking"
	}
	utterance.addEventListener("end", () => {
		if (!synth.speaking) {
			speakButton.innerText = "Speak Input Text"
		}
	})
})
