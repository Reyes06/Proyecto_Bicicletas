let bicicletas = require('../models/bicicleta')

exports.mostrarBicicletas = function (req, res) {
    res.render('bicicletas/list', {bicis: bicicletas});
}