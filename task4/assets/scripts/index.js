const total = document.querySelector(".total");

const calculateTotalPrice = (quantity = 2, price = 15000000) => {
	const result = quantity * price;
	const resultStr = result.toLocaleString("ru-RU");
	const totalPrice = `Стоимость покупки: ${resultStr} рублей`;
	//alert(totalPrice);
	total.textContent = totalPrice;
};
