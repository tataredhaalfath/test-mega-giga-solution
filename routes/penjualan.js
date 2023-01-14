const express = require('express')
const PenjualanController = require('../controllers/PenjualanController')
const router = express.Router()

router.get('/',PenjualanController.index)
router.post('/',PenjualanController.create)
router.put('/',PenjualanController.update)
router.delete('/',PenjualanController.delete)
module.exports = router