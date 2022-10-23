const createOrderCard = (orderId) => {
	let colDiv = document.createElement('div')
	let cardDiv = document.createElement('div')
	let cardHeaderDiv = document.createElement('div')
	let cardHeaderCancelBtn = document.createElement('i')
	let cardBodyDiv = document.createElement('div')
	let cardText = document.createElement('p')
	let orderStatusSpan = document.createElement('span')
	let cardFooterDiv = document.createElement('div')

	colDiv.classList = 'col-md-3'
	cardDiv.classList = 'card text-center'
	cardHeaderDiv.classList = 'card-header'
	cardHeaderCancelBtn.classList = 'fa-solid fa-xmark'
	cardBodyDiv.classList = 'card-body'
	cardText.classList = 'card-text'
	orderStatusSpan.classList = 'badge rounded-pill bg-success'
	cardFooterDiv.classList = 'card-footer'

	cardHeaderDiv.innerHTML = `<span>Order ID: <b>${orderId}</b></span>`
	cardText.innerHTML = `Large Pizza - ${Math.ceil(Math.random()*3)} Nos<br>Medium Pizza - ${Math.ceil(Math.random()*3)} Nos<br>Bill Amount: $${Math.ceil(Math.random()*10) + 10}`
	orderStatusSpan.innerText = 'Order Placed'
	cardFooterDiv.innerText = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
		hour: "numeric",
		minute: "numeric",
		second: "numeric"
  });

	orderStatusSpan.id = orderId
	cardHeaderCancelBtn.id = 'cancel-order'

	cardHeaderCancelBtn.addEventListener('click', () => {
		colDiv.style.display = 'none'
		totalOrders--

		if(totalOrders === 0){
			document.getElementById('empty-order-img').style.display = 'block'
		}
	})

	cardHeaderDiv.appendChild(cardHeaderCancelBtn)
	cardDiv.appendChild(cardHeaderDiv)
	cardBodyDiv.appendChild(cardText)
	cardBodyDiv.appendChild(orderStatusSpan)
	cardDiv.appendChild(cardBodyDiv)
	cardDiv.appendChild(cardFooterDiv)
	colDiv.appendChild(cardDiv)
	document.getElementById('order-cards-wrapper').appendChild(colDiv)
}

/* 
<div class="col-md-3">
	<div class="card text-center">
		<div class="card-header">
			<span>Order ID: <b>MP2022102100001</b></span>
			<i class="fa-solid fa-xmark" id="cancel-order"></i>
		</div>
		<div class="card-body">
			<p class="card-text">
				Large Pizza - 3 Nos<br>
				Medium Pizza - 1 Nos<br>
				Bill Amount: $25
			</p>
			<span class="badge rounded-pill bg-success">Order Placed</span>
		</div>
		<div class="card-footer">
			21-10-2022 at 11:30 AM
		</div>
	</div>
</div>
 */

 /*
	element.addEventListener(event, () => {
		// code to execute
	})
 */