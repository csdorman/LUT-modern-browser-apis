//Speech Synthesis Functionality
const synth = window.speechSynthesis
//Buttons
const speakButton = document.getElementById("speak")
const speakInput = document.getElementById("speak-text")
const stopButton = document.getElementById("stop")
const voiceSelect = document.getElementById("voice")
//Rate and Pitch
const speed = document.getElementById("speed")
let speedRate = speed.value
const pitch = document.getElementById("pitch")
let pitchRate = pitch.value

// const voiceList = synth.getVoices().forEach((voice) => {
// 	const newVoice = voice
// 	voice.textContent = `${voice.name}`
// })
//console.log(voiceList)
//console.log("Console getVoices", synth.getVoices())

//MDN Code

function populateVoiceList() {
	const voices = synth.getVoices()

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

// Speed change
speed.onchange = function () {
	console.log("Speed changed", speed, speedRate)
	speedRate = speed.value
}

// Pitch change
pitch.onchange = function () {
	console.log("Pitch change", pitch, pitchRate)
	pitchRate = pitch.value
}

// Speak/Pause/Stop Voice
speakButton.addEventListener("click", () => {
	console.log("Speech activated")
	const utterance = new SpeechSynthesisUtterance(speakInput.value) // create utterance
	utterance.rate = speedRate // set speed
	utterance.pitch = pitchRate // set pitch
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
