var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("pages/index", {
    layout: "layouts/main-layouts",
    title: "data",
  });
});

module.exports = router;
