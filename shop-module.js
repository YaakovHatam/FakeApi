function ShopModule() {
    const SERVER_URL = 'http://localhost:3000/products';

    function Product(id, title, type, description, filename, height, width, price, rating) {
        this.id = id;
        this.title = title;
        this.type = type;
        this.description = description;
        this.filename = filename;
        this.height = height;
        this.width = width;
        this.price = price;
        this.rating = rating;
    }

    function addProduct(productObject) {
        return fetch(SERVER_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productObject)
        }).then(res => res.json());
    }

    function getProduct(id) { }

    function getProducts() {
        return fetch(SERVER_URL).then(res => res.json());
    }
    function updateProduct(productObject) { }

    return {
        Product: Product,
        addProduct: addProduct,
        getProduct: getProduct,
        getProducts: getProducts,
        updateProduct: updateProduct
    }
}


