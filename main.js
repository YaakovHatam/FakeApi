const shopModule = ShopModule();
const productsContainerElement = document.getElementById('products');


document.getElementById('add-product').addEventListener('click', function () {
    const desc = "Heap of whole and sliced lemons and limes with mint in vintage metal grid box over old wooden table with turquoise wooden background. dark rustic style.";
    const p1 = new shopModule.Product(null, "Sliced lemons", "fruit", desc, "41.jpg", 600, 900, 27.14, 2);
    shopModule.addProduct(p1).then(res =>productsContainerElement.innerHTML += getProductHTML(p1));
    
})

shopModule.getProducts().then(productsRes => productsRes.forEach(product => productsContainerElement.innerHTML += getProductHTML(product)));

function getProductHTML(product) {
    return `
        <div class='col-3'>
            <h2>${product.title}</h2>
            <img class='img-fluid' src='https://raw.githubusercontent.com/YaakovHatam/FakeApi/main/images/${product.filename}'>
            <p><label>Quantity: <input></label></p>
            <p><button>Update product</button>
        </div>
    `;
}
