const express = require('express');
const router = express.Router();
const mainController = require('../controllers/MainController')


router.get('/', mainController.index)
router.get('/detalle/:id', mainController.detalleMenu)

module.exports = router;