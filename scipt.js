var firebaseConfig = {
	apiKey: "AIzaSyD7enlsyrB9lSFrUZhqsCWxirLszND_pCQ",
	authDomain: "onlineform-1b40a.firebaseapp.com",
	databaseURL: "https://onlineform-1b40a.firebaseio.com",
	projectId: "onlineform-1b40a",
	storageBucket: "onlineform-1b40a.appspot.com",
	messagingSenderId: "527055537361",
	appId: "1:527055537361:web:dd4e7e2fc00be14701f1f0",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var messagesRef = firebase.database().ref("messages");

document.getElementById("form").addEventListener("submit", submitForm);

function submitForm(e) {
	e.preventDefault();

	var first_name = getInputVal("first_name");
	var last_name = getInputVal("last_name");
	var email = getInputVal("email");
	var number = getInputVal("number");
	saveMessage(first_name, last_name, email, number);
	confirmation();
}
function getInputVal(e) {
	return document.getElementById(e).value;
}
function saveMessage(first_name, last_name, email, number) {
	var newMessageRef = messagesRef.push();
	newMessageRef.set({
		first_name: first_name,
		last_name: last_name,
		email: email,
		number: number,
	});
}
function confirmation() {
	const container = document.getElementById("form");
	container.classList.add("disapear");

	document.getElementById("confirm").classList.add("appear");
	document.querySelector("svg").classList.add("checkmark");
}
