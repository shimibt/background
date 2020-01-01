// window.onload = function () {
// 	rendomcolor1();
// 	rendomcolor2();
// 	setGradient();
// };

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");


function rendomcolor1() {
	color1.value = "#" + Math.floor(Math.random() * 16777216).toString(16);
	console.log(color1.value)	
	setGradient();
}
function rendomcolor2() {
	color2.value = "#" + Math.floor(Math.random() * 16777216).toString(16);
	console.log(color2.value)	
	setGradient();
}

function setGradient() {
	body.style.background =
		"linear-gradient(to right, " +
		color1.value +
		", " +
		color2.value +
		")";

	css.textContent = body.style.background + ";";
}


color1.addEventListener("input", setGradient, rendomcolor1);

// color2.addEventListener("input", setGradient);