let totalOrders = 0

const executeOrder = () => {
	totalOrders++
	document.getElementById('empty-order-img').style.display = 'none'
	
	let orderId = document.getElementById('order-id-input-text').value
	document.getElementById('order-id-input-text').value = ''

	createOrderCard(orderId)

	manageOrderStatus(orderId)
}