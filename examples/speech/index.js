const synth = window.speechSynthesis

const speakButton = document.getElementById("speak")
const speakInput = document.getElementById("speak-text")
const stopButton = document.getElementById("stop")

speakButton.addEventListener("click", () => {
	console.log("Speech btn clicked")
	const utterance = new SpeechSynthesisUtterance(speakInput.value)
	if (synth.paused) {
		synth.resume()
		speakButton.innerText = "Pause speaking"
	} else if (synth.speaking) {
		synth.pause()
		speakButton.innerText = "Resume speaking"
	} else {
		synth.speak(utterance)
		speakButton.innerText = "Pause speaking"
	}
	utterance.addEventListener("end", () => {
		if (!synth.speaking) {
			speakButton.innerText = "Speak Text"
		}
	})
})

stopButton.addEventListener("click", () => {
	console.log("Stop btn clicked")
	synth.cancel()
	speakButton.innerText = "Speak Text"
})
