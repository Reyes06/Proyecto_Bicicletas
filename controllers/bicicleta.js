let Bicicleta = require('../models/bicicleta');
let bicicletas = require('../models/listado_bicicletas');

exports.mostrarBicicletas = (req, res) => {
    res.render('bicicletas/list', {bicis: bicicletas});
}

exports.agregarBicicletaGET = (req, res) => {
    res.render('bicicletas/agregar');
}

exports.agregarBicicletaPOST = (req, res) => {
    bicicletas.push(new Bicicleta(req.body.id, req.body.modelo,req.body.color));
    console.log(req.body);
    res.redirect('/bicicletas');
}