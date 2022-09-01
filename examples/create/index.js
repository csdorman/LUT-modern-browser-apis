const card = document.querySelector(".card")

// Inferior way
card.innerHTML = "<h3> Hello World From innerHTML</h3>"

// Better way
// This makes sure that in text is sanitized - especially if its user-supplied
// The innerHTML is slower than parsing simple text (innerText)
const heading = document.createElement("h3")
heading.innerText = "Hello world from a created Element"
card.appendChild(heading)

// You can also use append
// Append lets you add multiple things (strings or nodes), appendChild is only a single node (no strings)
const headingTwo = document.createElement("h3")
headingTwo.innerText = "Hello world. From append."
card.append(headingTwo, "I'm also here", "And me!")

// Looping over data to create HTML
const wrapper = document.createElement("ul")
let fam = ["Colin", "Jessica", "Luke", "Monty", "Lucy"]
fam.forEach((member) => {
	const li = document.createElement("li")
	li.innerText = member
	wrapper.appendChild(li)
})
card.appendChild(wrapper)
