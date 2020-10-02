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

router.post("/submit-contact-form-details", async (req, res) => {
  model.contact_form
    .create({
      name: req.body.name,
      email: req.body.email,
      subject: req.body.subject,
      message: req.body.message,
    })
    .then((resp) => {
      res.status(201).send({ status: "success", message: "message recorded" });
    })
    .catch((err) => {
      res
        .status(500)
        .send({ status: "some error", message: "internal server error" });
    });
});

module.exports = router;
