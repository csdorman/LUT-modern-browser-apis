// Select copy button
const copyButton = document.getElementById("copy")
// Select copy input
const copyField = document.getElementById("copy-input")

// Event listener for button
copyButton.addEventListener("click", async () => {
	// Copy functionality
	let value = copyField.value
	await navigator.clipboard.writeText(value)
	alert(`Copied ${value} to the clipboard!`) //alert on copy
})
