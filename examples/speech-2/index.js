//Speech Synthesis Functionality
const synth = window.speechSynthesis
//Buttons
const speakButton = document.getElementById("speak")
const speakInput = document.getElementById("speak-text")
const stopButton = document.getElementById("stop")
//Rate and Pitch
const speed = document.getElementById("speed")
let speedRate = speed.value
const pitch = document.getElementById("pitch")
let pitchRate = pitch.value
//Voice Options
let voices = [] //empty for voice list
const voiceSelect = document.getElementById("voice")
let selectedVoice = null

function populateVoiceList() {
	voices = synth.getVoices()
	console.log("Voices", voices)
	console.log("onvoiceschanged:", synth.onvoiceschanged)
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
if (
	typeof speechSynthesis !== "undefined" &&
	speechSynthesis.onvoiceschanged !== undefined
) {
	speechSynthesis.onvoiceschanged = populateVoiceList
}

// Speed change
speed.onchange = function () {
	speedRate = speed.value
}

// Pitch change
pitch.onchange = function () {
	pitchRate = pitch.value
}

voiceSelect.onchange = function () {
	selectedVoice = voiceSelect.value
}

// Speak/Pause/Stop Voice
speakButton.addEventListener("click", () => {
	const utterance = new SpeechSynthesisUtterance(speakInput.value) // create utterance
	const selectedOption =
		voiceSelect.selectedOptions[0].getAttribute("data-name")
	console.log(selectedOption)
	utterance.rate = speedRate // set speed
	utterance.pitch = pitchRate // set pitch
	for (let i = 0; i < voices.length; i++) {
		if (voices[i].name === selectedOption) utterance.voice = voices[i]
	}
	utterance.voice = selectedOption // set voice
	console.log("Utterance: ", utterance)
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
