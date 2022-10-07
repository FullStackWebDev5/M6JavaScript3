function validate() {
	let firstName = document.getElementById('first-name').value
	let lastName = document.getElementById('last-name').value
	let email = document.getElementById('email').value
	let city = document.getElementById('city').value
	let state = document.getElementById('state').value
	let zip = document.getElementById('zip').value
	let tnC = document.getElementById('t-and-c').checked

	if(firstName.length >= 2) {
		document.getElementById('first-name-valid').style.display = 'block'
		document.getElementById('first-name-invalid').style.display = 'none'
	} else {
		document.getElementById('first-name-invalid').style.display = 'block'
		document.getElementById('first-name-valid').style.display = 'none'
	}

	if(lastName.length >= 2) {
		document.getElementById('last-name-valid').style.display = 'block'
		document.getElementById('last-name-invalid').style.display = 'none'
	} else {
		document.getElementById('last-name-invalid').style.display = 'block'
		document.getElementById('last-name-valid').style.display = 'none'
	}

	/*
		Email:
		- Include @ - Done
		- Include . - Done
		- Atleast 1 character before @
		- Atleast 2 characters after last .
	*/

	/* 
		includes - Returns true if the string contains that character/substring, returns false if not 
		indexOf - Returns  index of first occurence of that character/substring, else returns -1
	*/

	/*
		m@gmail.co
		Index of .: 7
		Length of email: 10

		m@gmail.com
		Index of .: 7
		Length of email: 11
	*/


	if(email.includes('@') && email.includes('.') && email.indexOf('@') != 0) {
		document.getElementById('email-valid').style.display = 'block'
		document.getElementById('email-invalid').style.display = 'none'
	} else {
		document.getElementById('email-invalid').style.display = 'block'
		document.getElementById('email-valid').style.display = 'none'
	}
}