const getPermissions = document.getElementById("get-permissions")
const permissionStatus = document.getElementById("status")

if ("permissions" in navigator) {
	getPermissions.disabled = false // remove disabled label from button HTML

	// Add event listener if API is supported
	getPermissions.addEventListener("click", async () => {
		const permissionResults = await navigator.permissions.query({
			name: "clipboard-read",
		})
		console.log("Permission results", permissionResults)
		permissionStatus.innerText = permissionResults.state
	})
} else {
	PermissionStatus.innerText = "Your browser won't work with this. UPGRADE!"
}
