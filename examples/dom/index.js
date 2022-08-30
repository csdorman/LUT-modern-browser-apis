//Find Me
const findMe = document.querySelector("#find_me");
const findMeSelector = document.getElementById("find_me");

console.log("Find me =", findMe, findMeSelector);

//Change Me
const changeMe = document.getElementById("change_me");
changeMe.innerHTML = `<h3> Found and Changed It!`;

//Add HTML
const addHtml = document.getElementById("add_html");

addHtml.innerHTML = "<strong>Added by MAGIC (and Javascript)</strong>";

//Change All
const changeAll = document.querySelectorAll(".change-all");

console.log(changeAll);

changeAll.forEach((item, index) => {
	item.innerText = "Added from forEach " + index;
});
