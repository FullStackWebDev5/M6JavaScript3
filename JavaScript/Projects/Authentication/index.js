const USERS_DB = []

const signUp = () => {
	let firstName = document.getElementById('first-name').value
	let lastName = document.getElementById('last-name').value
	let email = document.getElementById('email').value
	let phoneNumber = document.getElementById('phone-number').value
	let password = document.getElementById('password').value

	document.getElementById('sign-up-form').reset()

	let userDetails = {
    firstName,
    lastName,
    email,
    phoneNumber,
    password,
  };

	USERS_DB.push(userDetails)

	console.log(USERS_DB)
	console.log('Sign up successful!')

	changeNavLinks(userDetails)
}

const signIn = () => {
	let enteredEmail = document.getElementById('login-email').value
	let enteredPassword = document.getElementById('login-password').value

	let requiredUser = USERS_DB.find(user => user.email === enteredEmail && user.password === enteredPassword)

	if(requiredUser) {
		console.log('Access granted!')
		changeNavLinks(requiredUser)
	} else {
		console.log('Access denied!')
	}

	document.getElementById('sign-in-form').reset()
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

const changeNavLinks = (currentUser) => {
	let { firstName, lastName } = currentUser

	document.getElementById('sign-up-nav-link').style.display = 'none'
	document.getElementById('sign-in-nav-link').style.display = 'none'
	document.getElementById('profile-nav-link').style.display = 'block'
	document.getElementById('sign-out-nav-link').style.display = 'block'
	
	document.getElementById('profile-nav-link').innerText = `Hi, ${firstName} ${lastName}`
}

const signOut = () => {
	document.getElementById('profile-nav-link').innerText = ''

	document.getElementById('sign-up-nav-link').style.display = 'block'
	document.getElementById('sign-in-nav-link').style.display = 'block'
	document.getElementById('profile-nav-link').style.display = 'none'
	document.getElementById('sign-out-nav-link').style.display = 'none'
}

// let requiredUser = USERS_DB.find(function(user, index) {
// 	return user.email === enteredEmail && user.password === enteredPassword
// })