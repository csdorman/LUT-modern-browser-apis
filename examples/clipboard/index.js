// Select copy button
const copyButton = document.getElementById("copy")
// Select copy input
const copyField = document.getElementById("copy-input")

// Event listener for copy button
copyButton.addEventListener("click", async () => {
	// Copy functionality
	let value = copyField.value
	await navigator.clipboard.writeText(value)
	alert(`Copied ${value} to the clipboard!`) //alert on copy
})

const pasteInput = document.getElementById("paste-input")
const pasteButton = document.getElementById("paste")

pasteButton.addEventListener("click", async () => {
	if ("readText" in navigator.clipboard) {
		const value = await navigator.clipboard.readText()
		pasteInput.value = value
	}
})
