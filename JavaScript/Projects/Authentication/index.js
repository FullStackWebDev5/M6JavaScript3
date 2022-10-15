let userEmail, userPassword

const signUp = () => {
	userEmail = document.getElementById('email').value
	userPassword = document.getElementById('password').value

	document.getElementById('sign-up-form').reset()
	console.log('Sign up successful!')
}

const signIn = () => {
	let enteredEmail = document.getElementById('login-email').value
	let enteredPassword = document.getElementById('login-password').value

	if(enteredEmail === userEmail && enteredPassword === userPassword) {
		console.log('Access granted!')
	} else {
		console.log('Access denied!')
	}
}

const goToHome = () => {
	document.getElementById('home').style.display = 'block'
	document.getElementById('sign-up').style.display = 'none'
	document.getElementById('sign-in').style.display = 'none'
}

const goToSignUp = () => {
	document.getElementById('sign-up').style.display = 'block'
	document.getElementById('home').style.display = 'none'
	document.getElementById('sign-in').style.display = 'none'
}

const goToSignIn = () => {
	document.getElementById('sign-in').style.display = 'block'
	document.getElementById('home').style.display = 'none'
	document.getElementById('sign-up').style.display = 'none'
}