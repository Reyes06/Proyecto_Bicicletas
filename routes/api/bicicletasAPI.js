let express = require('express');
let router = express.Router();
let bicicletasAPIController = require('../../controllers/api/bicicletasAPI');

router.get('/',bicicletasAPIController.bicicletas_list);
router.post('/add',bicicletasAPIController.bicicletas_add);
router.delete('/delete',bicicletasAPIController.bicicletas_delete);
router.post('/update',bicicletasAPIController.bicicletas_update);

module.exports = router;