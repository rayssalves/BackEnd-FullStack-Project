const { Router } = require("express");
const Category = require("../models").category;

const router = new Router();

router.get("/", async (request, response) => {
  try {
    const categories = await Category.findAll();
    response.status(200).send(categories);
  } catch (error) {
    response.status(500).send({ error: error.message });
  }
});

module.exports = router;
