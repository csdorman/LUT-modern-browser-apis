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
//Empty array for voices
let voices = []

function populateVoiceList() {
	voices = synth.getVoices()
	console.log(voices)
	for (let i = 0; i < voices.length; i++) {
		const option = document.createElement("option")
		option.textContent = `${voices[i].name} (${voices[i].lang})`
		console.log(option)

		if (voices[i].default) {
			option.textContent += " — DEFAULT"
		}

		option.setAttribute("data-lang", voices[i].lang)
		option.setAttribute("data-name", voices[i].name)
		voiceSelect.appendChild(option)
	}
}
populateVoiceList()

// Speed change
speed.onchange = function () {
	speedRate = speed.value
}

// Pitch change
pitch.onchange = function () {
	pitchRate = pitch.value
}

// Speak/Pause/Stop Voice
speakButton.addEventListener("click", () => {
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
