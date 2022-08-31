const clickMe = document.getElementById("click_me")

// Using a separate function
function clicked() {
	console.log("Clicked!")
	// Update number field on button click
	value += 1
	console.log("Value is: ", value)
	clickValue.value = value
}

clickMe.addEventListener("click", clicked)

// Creating function inside of event listener
clickMe.addEventListener("click", () => {
	console.log("Clicked inside event listener")
})

// Update field value (on button click)
const clickValue = document.getElementById("click_value")
console.log(typeof clickValue.value) //the value is (numerical) string
let value = parseInt(clickValue.value) // convert into a (whole) number

// Fires when focus lost after input is changed
const changeMe = document.getElementById("change_me")
changeMe.addEventListener("change", () => {
	console.log("The value is changed")
})

// Fires when focus lost on input box
changeMe.addEventListener("blur", () => {
	console.log("Focus lost - click on browser again.")
})

//Fires on every character press in text input box
changeMe.addEventListener("input", () => {
	console.log("The text has changed")
})

// Bubbling
const card = document.querySelector(".card")
card.addEventListener("click", (event) => {
	console.log("Card clicked", event)
	console.log(event.target)
	console.log(event.composedPath)
})
