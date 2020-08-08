let BicicletasController = require('../controllers/bicicleta');
let express = require('express');
let router = express.Router();

router.get('/',BicicletasController.mostrarBicicletas);

module.exports = router;