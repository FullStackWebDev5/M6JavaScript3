const manageOrderStatus = (orderId) => {
	let requiredSpan = document.getElementById(orderId)
	const chefReceivedOrder = () => new Promise((resolve, reject) => {
		setTimeout(() => {
			requiredSpan.innerText = 'Chef received the order'
			resolve()
		}, 2000)
	})

	const pizzaSauceAdded = () => new Promise((resolve, reject) => {
		setTimeout(() => {
			requiredSpan.innerText = 'Pizza Sauce Added'
			resolve()
		}, 10000)
	})

	const firstLayerOfCheezeAdded = () => new Promise((resolve, reject) => {
		setTimeout(() => {
			requiredSpan.innerText = 'First layer of cheeze added'
			resolve()
		}, 5000)
	})

	const toppingsAdded = () => new Promise((resolve, reject) => {
		setTimeout(() => {
			requiredSpan.innerText = 'Toppings added'
			resolve()
		}, 12000)
	})

	const secondLayerOfCheezeAdded = () => new Promise((resolve, reject) => {
		setTimeout(() => {
			requiredSpan.innerText = 'Second layer of cheeze added'
			resolve()
		}, 5000)
	})

	const pizzaBaked = () => new Promise((resolve, reject) => {
		setTimeout(() => {
			requiredSpan.innerText = 'Pizza baked'
			resolve()
		}, 15000)
	})

	const oreganoAddedAndPacked = () => new Promise((resolve, reject) => {
		setTimeout(() => {
			requiredSpan.innerText = 'Oregano added and packed'
			resolve()
		}, 8000)
	})

	const packageReceivedAtCounter = () => new Promise((resolve, reject) => {
		setTimeout(() => {
			requiredSpan.innerText = 'Package received at counter'
			resolve()
		}, 2000)
	})

	chefReceivedOrder()
	.then(pizzaSauceAdded)
	.then(firstLayerOfCheezeAdded)
	.then(toppingsAdded)
	.then(secondLayerOfCheezeAdded)
	.then(pizzaBaked)
	.then(oreganoAddedAndPacked)
	.then(packageReceivedAtCounter)
	.then(() => {
		requiredSpan.innerText = 'The order is ready!'
	}).catch((error) => console.log(error))
}