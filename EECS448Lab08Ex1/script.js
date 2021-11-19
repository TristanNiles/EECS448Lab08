function checkInfo() {
	if (pw1.value != pw2.value ) {
		alert("Passwords don't match.");
		return;
	}
	if (pw1.value.length < 8 || pw2.value.length < 8) {
		alert("Password is not at least 8 characters long.")
		return;
	}
}
