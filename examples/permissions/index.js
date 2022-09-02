const getPermissions = document.getElementById("get-permissions")
const permissionStatus = document.getElementById("status")

getPermissions.addEventListener("click", async () => {
	const permissionResults = await navigator.permissions.query({
		name: "geolocation",
	})
	console.log("Permission results", permissionResults)
	permissionStatus.innerText = permissionResults.state
})
