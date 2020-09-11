const router = require("express").Router();
const model = require("../models/index");

router.get("/education-details", async (req, res) => {
  const data = await model.PersonalDetails.findAll({
    order: [["order", "DESC"]],
  });
  if (data.length) {
    res.status(200).json({ data: data });
  } else {
    res.status(404).json({ message: "No record present" });
  }
});

module.exports = router;
