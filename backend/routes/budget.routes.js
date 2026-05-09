const express = require("express");
const budget = require("../controllers/budget.controller");
const router = express.Router();

router.get("/get-budget", async (req, res) => {
  try {
    let data = await budget.getbudget();

    res.status(200).send({
      data: data,
      msg: "succes",
    });
    console.log(data);
    
  } catch (error) {
    console.log(error);

    res.status(500).send({
      msg: error.message,
    });
  }
});

router.post("/add-budget", async (req, res) => {
  try {
    let data = await budget.addbudget(req.body);
    res.status(200).send({
      data: data,
      msg: "succes",
    });
  } catch (error) {
    console.log(error);

    res.status(500).send({
      msg: error.message,
    });
  }
});
module.exports = router;
