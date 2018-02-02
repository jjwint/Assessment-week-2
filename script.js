(function () {

var user = {
	email: "coolguy@gmail.com",
	password: "ILoveCoffee",
	name: "Grant Chirpus"
};

var submitButton = document.getElementById("submitButton");
var email = document.getElementById("email");
var password = document.getElementById("password");
var userName = document.getElementById("userName");
var container = document.getElementById("hideContainer");
var welcome = document.getElementById("welcome");

submitButton.onclick = function checkLogin(event) {
	if (email.value === user.email && password.value === user.password) {
		container.classList.add("hidden");
		welcome.classList.remove("hidden");
	} else {
		alert("Your sign-in credentials are incorrect.");
	}
}

})();