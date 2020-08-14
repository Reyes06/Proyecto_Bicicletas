let BicicletasController = require('../controllers/bicicleta');
let express = require('express');
let router = express.Router();

router.get('/',BicicletasController.mostrarBicicletas);

router.post('/agregar', BicicletasController.agregarBicicletaPOST);
router.get('/agregar', BicicletasController.agregarBicicletaGET);

module.exports = router;