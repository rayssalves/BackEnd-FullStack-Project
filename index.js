const express = require("express");
const app = express();
const port = 4000;
const cors = require("cors");

const productsRouter = require("./routers/products");

app.use(express.json());
app.use(cors());

app.use("/products", productsRouter);

app.listen(port, () => console.log(`App listening on port ${port}!`));
