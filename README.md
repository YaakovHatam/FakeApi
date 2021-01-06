# Supermatket app

1. `npm init --yes`
2. `npm install -g json-server`
3. Create new file called `db.json`
4. copy the content from https://raw.githubusercontent.com/YaakovHatam/FakeApi/main/db.json to the opened file
5. run the command `json-server --watch db.json`
6. If you see `Watching...` you're done.

## Instructions
1. `constructor function` for product 
2. create the functions `addProduct(productObject)`, `getProduct(id)`, `updateProduct(productObject)`
3. create new product using the Product function constructor.
4. call the function `addProduct` passing the product that you created as paramater
5. inside `addProduct` use the function `fetch` to call the endpoint `http://localhost:3000/product` using `POST` verb and passing the product object as the data

## Routes
GET    /products
GET    /products/{id}
POST   /products
PUT    /products/{id}
PATCH  /products/{id}
DELETE /prodcuts/{id}
