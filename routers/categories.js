const { Router } = require("express");
const Category = require("../models").category;

const router = new Router();

// Get all the categories from the Database
router.get("/", async (request, response) => {
  try {
    const categories = await Category.findAll();
    return response.status(200).send(categories);
  } catch (error) {
    return response.status(500).send({ error: error.message });
  }
});

module.exports = router;
