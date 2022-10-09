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

	if (
    email.includes("@") &&
    email.includes(".") &&
    email.indexOf("@") != 0 &&
    email.length - email.lastIndexOf(".") >= 3
  ) {
    document.getElementById("email-valid").style.display = "block";
    document.getElementById("email-invalid").style.display = "none";
  } else {
    document.getElementById("email-invalid").style.display = "block";
    document.getElementById("email-valid").style.display = "none";
  }

	if(city.length >= 3) {
		document.getElementById('city-valid').style.display = 'block'
		document.getElementById('city-invalid').style.display = 'none'
	} else {
		document.getElementById('city-invalid').style.display = 'block'
		document.getElementById('city-valid').style.display = 'none'
	}

	if(state != 'None') {
		document.getElementById('state-valid').style.display = 'block'
		document.getElementById('state-invalid').style.display = 'none'
	} else {
		document.getElementById('state-invalid').style.display = 'block'
		document.getElementById('state-valid').style.display = 'none'
	}

	let zipNumber = parseInt(zip)
	if(zip.length === 6 && !isNaN(zipNumber)) {
		document.getElementById('zip-valid').style.display = 'block'
		document.getElementById('zip-invalid').style.display = 'none'
	} else {
		document.getElementById('zip-invalid').style.display = 'block'
		document.getElementById('zip-valid').style.display = 'none'
	}

	if(tnC) {
		document.getElementById('t-and-c-invalid').style.display = 'none'
	} else {
		document.getElementById('t-and-c-invalid').style.display = 'block'
	}
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
	Last Index of .: 7
	Length of email: 10

	m@gmail.com
	Last Index of .: 7
	Length of email: 11
*/

/*
	- Length 6
	- All numbers
*/

// parseInt - Returns Number equivalent of String, if cannnot - then returns NaN
// isNaN - Returns true if value is NaN
// !isNaN -> Returns true if value is Number