const express = require("express");
const app = express();
app.use(express.json());

const productController = require("./controller/product.controller");
const sellerController = require("./controller/seller.controller");

app.use("/products", productController);
app.use("/sellers", sellerController);

module.exports = app;