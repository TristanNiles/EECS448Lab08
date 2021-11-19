
let picsArr = ["dune1.jpg", "dune2.jpeg", "dune3.jpeg", "dune4.jpg", "dune5.jpeg"]
let src;

function prev() {
	getSrc();
	let tempSrc;
	if (src == picsArr[0]) {
		tempSrc = picsArr[4];
	}
	else {
		for (let i = 1; i < 5; i++) {
			if (src == picsArr[i]) {
				console.log("ran through if in loop");
				tempSrc = picsArr[i-1];
				i = 5;
			}
		}
	}
	setSrc(tempSrc);
}

function next() {
	getSrc();
	let tempSrc;
	if (src == picsArr[4]) {
		tempSrc = picsArr[0];
	}
	else {
		for (let i = 0; i < 4; i++) {
			if (src == picsArr[i]) {
				console.log("ran through if in loop");
				tempSrc = picsArr[i+1];
				i = 5;
			}
		}
	}
	setSrc(tempSrc);
}
function getSrc() {
	src = document.getElementById("slideshow").getAttribute('src');
}
function setSrc(tempSrc) {
	document.getElementById("slideshow").setAttribute('src', tempSrc);
}
