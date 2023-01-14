const express = require("express");
const MasterBarangController = require("../controllers/MasterBarangController");
const router = express.Router();

router.get("/", MasterBarangController.index);
router.post("/", MasterBarangController.create);
router.put("/", MasterBarangController.update);
router.delete("/", MasterBarangController.delete);
module.exports = router;
