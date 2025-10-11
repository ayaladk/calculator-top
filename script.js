const screen = document.querySelector(".screen");
const buttons = document.querySelectorAll(".number");
const resetButton = document.querySelector("#clear");
const equal = document.querySelector("#equal");

let currentInput = "";

function clearButton() {
	currentInput = "";
	screen.textContent = currentInput;
}

buttons.forEach(btn => {
	btn.addEventListener("click", () => {
		currentInput += btn.textContent;
		screen.textContent = currentInput;
	});
});

resetButton.addEventListener("click", () => clearButton());

equal.addEventListener("click", () => {
	try {
		screen.textContent = new Function(`return Math.round(${screen.textContent})`)();
		currentInput = screen.textContent;
		if (screen.textContent === "Infinity") {
			currentInput = "";
			screen.textContent = "Error";
		} else if (screen.textContent === "NaN") {
			currentInput = "";
			screen.textContent = "Error";
		}
	} catch {
		screen.textContent = "Error";
		currentInput = "";
	}
});