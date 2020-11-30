function arrayOfProducts(array) {
	const productArr = new Array(array.length).fill(1)
	
	let leftProduct = 1
	for(let i = 0; i < array.length; i++){	
		productArr[i] = leftProduct
		leftProduct *= array[i]
	}
	
	let rightProduct = 1
	for(let j = array.length-1; j >= 0; j--){
		productArr[j] *= rightProduct
		rightProduct *= array[j]
	}
	return productArr
}