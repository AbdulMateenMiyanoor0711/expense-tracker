const express = require("express");
const expenses = require("../controllers/expense.controller");
const router = express.Router();

router.get("/get-expenses", async (req, res) => {
  try {
    let data = await expenses.getexpenses();
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

router.post("/add-expense", async (req, res) => {
  try {
    let data = await expenses.addexpenses(req.body);
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

router.patch("/edit-expense", async (req, res) => {
  try {
    let data = await expenses.editexpenses(req.body);
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

router.delete("/delete-expense", async (req, res) => {
  try {
    let data = await expenses.deleteexpense(req.body);

    res.status(200).send({
      data: data,
      msg: "succes",
    });
    console.log(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: error.message,
    });
  }
});

module.exports = router;
