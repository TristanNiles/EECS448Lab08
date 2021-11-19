let lorem = '\0';
let borRed;
let borGre;
let borBlu;
let borWid;
let bgRed;
let bgGre;
let bgBlu;

function update() {
	let borRgbStr = '\0';
	let bgRgbStr = '\0';
	updateVars();
	if (borRed < 0 || borRed > 255) {
		alert("Red border value out of range (0-255)")
		return;
	}
	if (borGre < 0 || borGre > 255) {
		alert("Green border value out of range (0-255)")
		return;
	}
	if (borBlu < 0 || borBlu > 255) {
		alert("Blue border value out of range (0-255)")
		return;
	}
	if (bgRed < 0 || borRed > 255) {
		alert("Red background color value out of range (0-255)")
		return;
	}
	if (bgGre < 0 || bgGre > 255) {
		alert("Green background color value out of range (0-255)")
		return;
	}
	if (bgBlu < 0 || bgBlu > 255) {
		alert("Blue background color value out of range (0-255)")
		return;
	}
	borRgbStr = "rgb(" + borRed.toString() + ", " + borGre.toString() + ", " + borBlu.toString() + ")";
	bgRgbStr = "rgb(" + bgRed.toString() + ", " + bgGre.toString() + ", " + bgBlu.toString() + ")";

	lorem.style.border = borWid.toString() + "px solid " + borRgbStr;
	lorem.style.backgroundColor = bgRgbStr;
	
}

function updateVars() {
	if (lorem == '\0') {
		lorem = document.getElementById("lorem");
	}
	borRed = document.getElementById("borRed").value;
	borGre = document.getElementById("borGre").value;
	borBlu = document.getElementById("borBlu").value;
	borWid = document.getElementById("borWid").value;
	bgRed = document.getElementById("bgRed").value;
	bgGre = document.getElementById("bgGre").value;
	bgBlu = document.getElementById("bgBlu").value;
}
