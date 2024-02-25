// ------------------- Variables & Nodes -------------------
const red = document.querySelector('#red');
const green = document.querySelector('#green');
const blue = document.querySelector('#blue');
const colorTest = document.querySelector('.color-test');

console.log(red, green, blue, colorTest);

// ------------------- Functions -------------------

function changeColor() {
	colorTest.style.color = `rgb(${red.value}, ${green.value}, ${blue.value})`;
}

// ------------------- Event Listeners -------------------

red.addEventListener('input', changeColor);
green.addEventListener('input', changeColor);
blue.addEventListener('input', changeColor);
