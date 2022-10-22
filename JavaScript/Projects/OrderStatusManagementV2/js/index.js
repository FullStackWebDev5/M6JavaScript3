const executeOrder = () => {
	let orderId = document.getElementById('order-id-input-text').value
	document.getElementById('order-id-input-text').value = ''

	createOrderCard(orderId)
}