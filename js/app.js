
function display(cartProduct) {

    let totalPrice = 0;
    // console.log(cartProduct);
    const tableBody = document.getElementById('cart-products');
    tableBody.innerHTML = '';
    for (let i = 0; i < cartProduct.length; i++) {
        // console.log(cartProduct[i].productName, cartProduct[i].productPrice);
        const name = cartArray[i].productName;
        const price = cartArray[i].productPrice;
        // console.log(name, price);

        totalPrice = totalPrice + price;

        const tr = document.createElement('tr');
        tr.innerHTML = `
        <th>${i + 1}</th>
        <td>${name}</td>
        <td>${price}</td>
        `;
        tableBody.appendChild(tr);
    }
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <th></th>
    <td>Total price</td>
    <td>${totalPrice}</td>
    
    `;

    tableBody.appendChild(tr);
}




cartArray = [];
function addToCart(element) {

    // console.log(element.parentNode.parentNode.children[0].innerText);
    // console.log(element.parentNode.parentNode.children[1].children[0].innerText)

    const productName = element.parentNode.parentNode.children[0].innerText;
    const productPrice = element.parentNode.parentNode.children[1].children[0].innerText;

    const productObj = {
        productName: productName,
        productPrice: parseInt(productPrice)
    }
    cartArray.push(productObj);
    // console.log(cartArray);
    // console.log(cartArray.length);
    document.getElementById('total-added-product').innerText = cartArray.length;
    display(cartArray);
}