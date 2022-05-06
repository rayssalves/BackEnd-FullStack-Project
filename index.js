const express = require("express");
const productsRouter = require("./routers/products");
const categoriesRouter = require("./routers/categories");
const signUpRouter = require("./routers/users");
const cors = require("cors");

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());

app.use("/products", productsRouter);
app.use("/categories", categoriesRouter);
app.use("/signup", signUpRouter);

app.listen(port, () => console.log(`App listening on port ${port}!`));
