var userInput = document.getElementById('input-email-container');
var inputEmail = document.getElementById('userInput');
var labelinput = document.getElementById('label-input');
var nextButton = document.querySelector('.next-btn');
var title = document.getElementById('title');
var loginbtn = document.querySelector('.login-btn');
var userinputpassword = document.getElementById('userInput-password');
var googleoption = document.querySelector('.google-option');
var footercard = document.querySelector('.footer-card');
var example = document.getElementById('example');
var inputpasswordbox = document.getElementById('input-password-container');
var oruse = document.getElementById('oruse');
var forgetpassword = document.querySelector('.forget-password');
var usernameview = document.querySelector('.username-view');
var usernameinfocontainer = document.getElementById('info-username-container');
var inputresult = document.querySelector('.input-result');
var important = document.querySelector('.important');
var emailanimation = document.getElementById('animation-email');
var slidetop = document.getElementById('slidetop');
var slideleft = document.getElementById('slideleft');

function toggleInput() {
	var emailValue = inputEmail.value.trim();

	if (inputEmail.type === 'text' && emailValue !== '') {
		nextButton.classList.add('hidden');
		title.innerText = "Masukkan Password";
		loginbtn.style.display = 'block';
		inputpasswordbox.style.display = 'flex';
		googleoption.style.display = "none";
		footercard.style.display = "none";
		example.style.display = 'none';
		oruse.style.display = 'none';
		forgetpassword.style.display = 'block';
		usernameinfocontainer.style.display = 'flex';
		usernameview.innerHTML = inputEmail.value;
		important.style.display ='none';
		emailanimation.classList.add('hidden');
		slidetop.classList.add('top');
		slideleft.classList.add('slideleft');

		if (isValidPhone(inputEmail.value)) {
			inputresult.innerHTML = 'No handphone'
		} else {
			inputresult.innerHtmL = '';
		}
	}
	else{
		example.style.display = 'none';
		important.style.display ='block';
		userInput.style.border ='2px solid #cb0b04';
	}
}



inputEmail.addEventListener('input', function () {
    example.style.display = '';
    important.style.display = '';
    userInput.style.border = '';
});

function toggleEdit() {
	title.innerText = "Login dulu yuk";
	userInput.style.display = "";
	nextButton.style.display = "";
	loginbtn.style.display = "";
	googleoption.style.display = "";
	footercard.style.display = "";
	example.style.display = 'inline'
	inputpasswordbox.style.display = 'none';
	oruse.style.display = 'block';
	forgetpassword.style.display = '';
	inputEmail.innerHTML = usernameview.value;
	usernameinfocontainer.style.display = '';
	emailanimation.classList.remove('hidden');
	nextButton.classList.remove('hidden');
	slidetop.classList.remove('top');
	slideleft.classList.remove('slideleft');
}

function togglePasswordVisibility(event) {
	event.preventDefault();
	var eyeOpenButton = document.getElementById('eye-icon');

	if (userinputpassword.type === "password") {
		userinputpassword.type = "text";
		eyeOpenButton.src = "./Asset/Img/eye-open.png";
	} else {
		userinputpassword.type = "password";
		eyeOpenButton.src = "./Asset/Img/eye-close.png";
	}
}


function isValidEmail(email) {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
}

function isValidPhone(phone) {
	const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
	return phoneRegex.test(phone);
}